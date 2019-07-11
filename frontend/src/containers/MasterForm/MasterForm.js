import React, { Component } from 'react';
import Stage from './Stage/Stage';
import axios from 'axios';
import Stepper from './Stepper/Stepper';
import StageControls from './StageControls/StageControls';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { fieldFormValidation } from '../../util/ValidationUtils';
//import { rutFormat } from '../../util/FormatUtils.js';
import { generateSubForm, getComunas } from '../../util/common';
import  {
	FORM_CUENTA_USUARIO,
	FORM_EMPRESA,
	FORM_NUEVA_OFERTA,
	FORM_POSTULANTE,
	FORM_POSTULANTE_LABORAL
} from '../../constants';
import { NEW_CURSO } from '../../constants/subforms';
import {
	updatePerfilCandidato,
	updatePerfilLaboral,
	updatePerfilEmpresa,
	createOferta,
	addExperiencia,
	addCurso,
	addTitulo,
} from '../../util/APIUtils';
//import '../../custom.css'

class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    formData: null,
    missing: [],
		show: false,
		activeUserID: null,
		alert: { show: false, message: null },
		form: ''
	}
	
	cloneStateElementsArray = (inputIdentifier) => {
		const updatedForm = {
      ...this.state.form
    }
    const updatedStages = {
      ...updatedForm.stages
    }
    const updatedCurrentStage = {
      ...updatedStages[this.state.currentStage]
    }
    const updatedStageFields = {
      ...updatedCurrentStage.fields
    }
    // updatedFieldElements es un objeto con keys numéricas para cada elemento del grupoFormulario
    const updatedFieldElements = {
      ...updatedStageFields[inputIdentifier].elements
    }

    // clonar el array elements
    const elementsArray = [];
    for (let elem in updatedFieldElements) {
      elementsArray.push({
        ...updatedFieldElements[elem]
      })
		}
		
		return { 
			updatedForm,
			updatedStages,
			updatedCurrentStage,
			updatedStageFields,
			updatedFieldElements,
			elementsArray
		}
	}

  handleDismiss = () => {
		this.setState({ show: false, alert: { show: false } });
		console.log("Alert.show: ", this.state.alert.show)
	}

  handleValidation = (event, inputIdentifier, element) => {
    const clone = {...this.cloneStateElementsArray(inputIdentifier)}

    let missing = this.state.missing

    this.setState({ show: false })

    for (let elem in clone.elementsArray) {
      //console.log(clone.elementsArray[elem].elementConfig.id)
      if(clone.elementsArray[elem].elementConfig.id === element) {

        const resp = fieldFormValidation(missing, element, event.target.value)

        missing = resp.missing
        clone.elementsArray[elem].subtext = resp.subtext
      }

      clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements[elem] = clone.elementsArray[elem];
    } 

    //console.log('missing: {'+missing+'}')

    this.setState({
      form: clone.updatedForm,
      missing: missing,
    });   
  }

  // handleChange(event, firstName)
  handleChange = (event, inputIdentifier, element, elementIndentifier) => {
    const clone = {...this.cloneStateElementsArray(inputIdentifier)}

    for (let elem in clone.elementsArray) {
      //console.log(elementsArray[elem].elementConfig.id)
      if(clone.elementsArray[elem].elementConfig.id === element) {
        if (element === 'region'){
          clone.updatedForm.stages[this.state.currentStage].fields['comuna'] =  getComunas(event.target.value)
        }

        if (elementIndentifier === 'date'){
          clone.elementsArray[elem].value = event
        }
        else {
          clone.elementsArray[elem].value = event.target.value;
        }
        clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements[elem] = clone.elementsArray[elem];
      }   
		}
		
    this.setState({
      form: clone.updatedForm
    });

    //console.log('form:')
    //console.log(this.state.form)
	}
	
	addExperienciasHandler = (userId, elements) => {
		if (elements.length < 5 || elements.length % 5 !== 0) {
			return;
		}
		console.log("addExperienciasHandler elements: ", elements);
		/* Para cada elemento, crear un objeto experiencia y enviarlo */
		for (let element = 0; element < elements.length; element=element+5) {
			let elementObj = {
				empresa: elements[element].value,
				fechaInicio: elements[element+1].value,
				fechaFin: elements[element+2].value,
				cargo: elements[element+3].value,
				area: elements[element+4].value
			}
			addExperiencia(userId, elementObj)
				.then(response => {
					console.log("RESPONSE addExperiencia: ", response);
				}).catch(error => {
					console.log("ERROR addExperiencia: ", error);
				});
		}
	}

	addCursosHandler = (userId, elements) => {
		if (elements.length < 4 || elements.length % 4 !== 0) {
			return;
		}
		console.log("addCursosHandler elements: ", elements);
		/* Para cada elemento, crear un objeto curso y enviarlo */
		for (let element = 0; element < elements.length; element=element+4) {
			let elementObj = {
				name: elements[element].value,
				institucion: elements[element+1].value,
				fechaInicio: elements[element+2].value,
				fechaFin: elements[element+3].value
			}
			addCurso(userId, elementObj)
				.then(response => {
					console.log("RESPONSE addCurso: ", response);
				}).catch(error => {
					console.log("ERROR addCurso: ", error);
				});
		}
	}

	addTitulosHandler = (userId, elements) => {
		if (elements.length < 3 || elements.length % 3 !== 0) {
			return;
		}
		console.log("addCursosHandler elements: ", elements);
		/* Para cada elemento, crear un objeto curso y enviarlo */
		for (let element = 0; element < elements.length; element=element+3) {
			let elementObj = {
				name: elements[element].value,
				institucion: elements[element+1].value,
				anho: elements[element+2].value,
			}
			addTitulo(userId, elementObj)
				.then(response => {
					console.log("RESPONSE addTitulo: ", response);
				}).catch(error => {
					console.log("ERROR addTitulo: ", error);
				});
		}
	}

  handleSubmit = (event) => {
		event.preventDefault();   
    // Si el array missing esta vacio, significa que no hay campos incorrectos
    // En ese caso, "!this.state.missing.length" devuelve true
    if (this.state.missing.length === 0) {

			/* submit de todos los elementos del formulario */
			const updatedForm = {
				...this.state.form
			}
			const updatedStages = {
				...updatedForm.stages
			}
			//let currentUser = {...this.props.currentUser}

			let datos = {};
			let direccion = {};
			let experienciasEmpresa = [];
			
			for (let stage in updatedStages) {
				const updatedStageFields = {...updatedStages[stage].fields};
				
				for (let field in updatedStageFields) {
					//console.log("FIELD: ", field)
					const fieldObj = {...updatedStageFields[field]};
					const elements = [...fieldObj.elements];
					//console.log("ELEMS: ", elements)
					if (fieldObj.type === "experiencias") {
						this.addExperienciasHandler(this.state.activeUserID, elements);
					} else if (fieldObj.type === "cursos") {
						this.addCursosHandler(this.state.activeUserID, elements)
					} else if (fieldObj.type === "titulos") {
						this.addTitulosHandler(this.state.activeUserID, elements)
					} else if (fieldObj.type === "experienciasEmpresa") {
						if (elements.length < 2 || elements.length % 2 !== 0) {
							continue;
						}
						console.log("experienciasEmpresa elements: ", elements);
						/* Para cada elemento, crear una experiencia exigida */
						for (let element = 0; element < elements.length; element=element+2) {
							let elementObj = {
								area: elements[element].value,
								duracion: elements[element+1].value
							}
							experienciasEmpresa.push(elementObj);
						}
						continue;
						//console.log("experienciasEmpresa: ", experienciasEmpresa)
					}

					for (let element in elements) {
						//console.log(elements[element])
						let id = elements[element].elementConfig.id;
						let value = elements[element].value;
						if (id === "calle" || id === "comuna" || id === "region") {
							direccion[ `${[id]}` ] = value;
							continue;
						}
						//console.log(id, typeof(elements[element].value))
						datos[`${[id]}`] = value;
					}
				}
			}
			
			if (Object.keys(direccion).length > 0) {
				datos["direccion"] = {...direccion};
			}
			

			/* TODO: enviar los datos al endpoint correcto */
			//console.log("USER: ", currentUser)
			switch (this.state.form.title) {
				case FORM_CUENTA_USUARIO:
					console.log("ENDPOINT CUENTA USUARIO");
					console.log(this.props.match)
					break;
				case FORM_POSTULANTE:
					updatePerfilCandidato(this.state.activeUserID, datos)
					.then(response => {
						console.log("RESPONSE updatePerfilCandidato: ", response);
					}).catch(error => {
						console.log("ERROR updatePerfilCandidato: ", error);
					});
					break;
				case FORM_POSTULANTE_LABORAL:
					console.log(datos)
					console.log("ID: ", this.state.activeUserID)
					updatePerfilLaboral(this.state.activeUserID, datos)
					.then(response => {
						console.log("RESPONSE updatePerfilLaboral: ", response);
					}).catch(error => {
						console.log("ERROR updatePerfilLaboral: ", error);
					});
					break;
				case FORM_EMPRESA:
					updatePerfilEmpresa(this.state.activeUserID, datos)
					.then(response => {
						console.log("RESPONSE updatePerfilEmpresa: ", response);
					}).catch(error => {
						console.log("ERROR updatePerfilEmpresa: ", error);
					});
					break;
				case FORM_NUEVA_OFERTA:
					datos["experiencias"] = experienciasEmpresa;
					console.log("DATOS FORM_NUEVA_OFERTA: ", datos)
					createOferta(this.state.activeUserID, datos)
					.then(response => {
						console.log("RESPONSE createOferta: ", response);
						window.location.reload();
					}).catch(error => {
						console.log("ERROR createOferta: ", error);
					});
					break;
				default:
					break;
			}
     
    } else {
      console.log('Submit denegado');
      this.setState({ show: true })
		}
  }
  
  _goto = (stage) => {
    this.setState({
      currentStage: stage
    });
  }

  _next = () => {
    let currentStage = this.state.currentStage;
    let lastStage = this.state.form.totalStages - 1;

    currentStage = currentStage >= lastStage - 1 ? lastStage : currentStage + 1;
    this.setState({
      currentStage: currentStage
    });
  }

  _prev = () => {
		let currentStage = this.state.currentStage;
		let firstStage = 0;

		currentStage = currentStage <= firstStage ? firstStage : currentStage - 1;
		this.setState({
			currentStage: currentStage
		});
  }

	addSubForm = (inputIdentifier, subForm) => {
		//console.log(subForm);
		const clone = {...this.cloneStateElementsArray(inputIdentifier)}
		const subFormSize = subForm.length;
		const stateFormSize = clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements.length;
		const newElementId = stateFormSize/subFormSize;
		
		let updatedSubForm = generateSubForm(newElementId, subForm);
		//console.log(updatedSubForm);
		
    const newElementsArray = clone.elementsArray.concat(updatedSubForm);
		clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = newElementsArray;
		console.log(clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements);

    this.setState({
      form: clone.updatedForm
    });
	}
  
  deleteForm = (inputIdentifier, idForm, NumberOfFieldsToDelete) => {
		const clone = {...this.cloneStateElementsArray(inputIdentifier)}
		// eliminar los elements del form que corresponden
    // desde el id de la experiencia, trabajo o curso, 
    // eliminar NumberOfFieldsToDelete número de campos
		clone.elementsArray.splice(idForm, NumberOfFieldsToDelete);

    let contadorId = -1;
    for (let element=0; element < clone.elementsArray.length; element++) {
      if (element % NumberOfFieldsToDelete === 0) {
				contadorId++;
			}
			
			let id = clone.elementsArray[element].elementConfig.id;
			let newId = id.replace(/\d+/g, '');
			let name = clone.elementsArray[element].elementConfig.name;
			let newName = name.replace(/\d+/g, '');

			clone.elementsArray[element].elementConfig.id = newId + contadorId;
			clone.elementsArray[element].elementConfig.name = newName + contadorId;
		}
		
    clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = clone.elementsArray;

    this.setState({
      form: clone.updatedForm
    });
	}

  fetchData = async (endpoint) => {
    let formData = null;

    await axios.get(endpoint)
      .then(response => {
        formData = response.data;
        console.log('response: ')
        console.log(response.data)
      })
      .catch(function(error){
        console.log(error);
      })

    for (let i=0; i<this.state.form.totalStages; i++)
      this.formatData(formData, i)
  }
	
	formatData = (formData, currentStage) => {
    const updatedForm = {
      ...this.state.form
    }
    const updatedStages = {
      ...updatedForm.stages
    }
    const updatedCurrentStage = {
      ...updatedStages[currentStage]
    }
    const updatedStageFields = {
      ...updatedCurrentStage.fields
    }

    const formDataDireccion = {
      ...formData['direccion']
    }

    const formDataCursos = {
      ...formData['cursos']
    }

    const formDataExp = {
      ...formData['experiencias']
    }

    const formDataTitulos = {
      ...formData['titulos']
    }

    for (let field in updatedStageFields) {
      let currentField = {...updatedStageFields[field]};
      let currentFieldElements = {...currentField.elements}
      for (let element in currentFieldElements) {
        if (formData[field]) {
          if (field.substring(0,5) === 'fecha')
            currentFieldElements[element].value = new Date(formData[field]);

          else
            currentFieldElements[element].value = formData[field];
        }

        else if (formDataDireccion[field]) {
          if (field === 'comuna')
            updatedForm.stages[currentStage].fields['comuna'] =  getComunas(formDataDireccion['region'].toString())

          currentFieldElements[element].value = formDataDireccion[field];
        }

        /*else if (formDataCursos) {
          this.addSubForm('cursos', NEW_CURSO)
        }

        /*else if (formDataExp) {
          asdas
        }

        else if (formDataTitulos) {
          asdas
        }*/
      }
    }
    this.setState({
      form: updatedForm
    })
  }

	componentDidMount() {
    let activeUserID = null
    if (this.props.currentUser.authorities[0].authority === 'ROLE_AHA')
      activeUserID = this.props.match.params.id
    else
      activeUserID = this.props.currentUser.id

		this.setState({
			form: this.props.formConfig
		})

		if(this.state.form != null) {
			let currentEndpoint = this.props.formConfig.endpoint+('/')+activeUserID+('/')//this.props.this.state.activeUserID+('/')
			switch(this.props.formConfig.id) {
				//case(0): //formCuentaUsuario, probablemente a futuro
				//  break;
				case(1): //formEmpresa
					currentEndpoint = currentEndpoint + 'perfilEmpresa'
					break;
				//case(2): //formNuevaOferta
				//  break;
				case(3): //formPostulante
					currentEndpoint = currentEndpoint + 'perfilCandidato'
					break;
				case(4): //formPostulanteLaboral
					currentEndpoint = currentEndpoint + 'perfilLaboral'
					break;
				default:
					break;
			}

			this.fetchData (currentEndpoint);

      this.setState({
        activeUserID: activeUserID
      })
		}
  }

  render () {
		//console.log("MasterForm props: ", this.props)
    let stages = (
      this.props.formConfig.stages.map(stage => {
        return <Stage
          key={stage.id}
          title={stage.name}
          id={stage.id}
          // stageFields = { apellidos: {elementConfig: {}, elementType: '', ...}, nombres: {}, ... }
          stageFields={stage.fields}
          currentStage={this.state.currentStage}
          totalStages={this.props.formConfig.totalStages}
          handleValidation={this.handleValidation}
          handleChange={this.handleChange}
					addSubForm={this.addSubForm}
          deleteForm={this.deleteForm}
          />
        })
    );

    let stageTitlesArray = [];
    for (let stage in this.props.formConfig.stages) {
      stageTitlesArray.push(this.props.formConfig.stages[stage].name);
    }

    return (

      <Card className="mb-4">
        <Card.Header className="px-2">
          <Alert
						className="mb-0 mt-2"
						variant="danger"
						show={this.state.show}
						onClose={this.handleDismiss}
						dismissible>
						"Hay campos con errores."
          </Alert>
          <Stepper
						currentStage={this.state.currentStage}
						totalStages={this.props.formConfig.totalStages}
						stageTitles={stageTitlesArray}
						goto={this._goto}
					/>
        </Card.Header>
        <Card.Body>
          <form onSubmit={(event) => this.handleSubmit(event, "POST")}>
            { stages }
            <StageControls
              totalStages={this.props.formConfig.totalStages}
              currentStage={this.state.currentStage}
              _prev={this._prev}
              _next={this._next}
            />
          </form>
        </Card.Body>
      </Card>
    );
  }
}

export default MasterForm;