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
import {
	updatePerfilCandidato,
	updatePerfilLaboral,
	updatePerfilEmpresa,
	createOferta,
} from '../../util/APIUtils';
//import '../../custom.css'

class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    formData: null,
    missing: [],
		show: false,
		endpoint: '',
		alert: { show: false, message: null },
	}
	
	cloneStateElementsArray = (inputIdentifier) => {
		const updatedForm = {
      ...this.props.formConfig
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

  handleSubmit = (event, method) => {
		event.preventDefault();   
    // Si el array missing esta vacio, significa que no hay campos incorrectos
    // En ese caso, "!this.state.missing.length" devuelve true
    if (this.state.missing.length === 0) {

			/* submit de todos los elementos del formulario */
			const updatedForm = {
				...this.props.formConfig
			}
			const updatedStages = {
				...updatedForm.stages
			}

			let datos = {};
			let direccion = {};
			for (let stage in updatedStages) {
				const updatedStageFields = {...updatedStages[stage].fields};
				
				for (let field in updatedStageFields) {
					//console.log("FIELD: ", field)
					const fieldObj = {...updatedStageFields[field]};
					const elements = {...fieldObj.elements};
					for (let element in elements) {
						//console.log(elements[element])
						let id = elements[element].elementConfig.id;
						let value = elements[element].value;
						if (id === "calle" || id === "comuna" || id === "region") {
							direccion[ `${[id]}` ] = elements[element].value;
							continue;
						}
						datos[`${[id]}`] = value;
					}
				}
			}
			console.log("DIRECCION: ", direccion, Object.keys(direccion).length)
			if (Object.keys(direccion).length > 0) {
				datos["direccion"] = {...direccion};
			}
			

			/* TODO: enviar los datos al endpoint correcto */
			let currentUser = {...this.props.currentUser}
			console.log("USER: ", currentUser)
			switch (this.props.formConfig.title) {
				case FORM_CUENTA_USUARIO:
					console.log("ENDPOINT CUENTA USUARIO");
					console.log(this.props.match)
					break;
				case FORM_POSTULANTE:
					updatePerfilCandidato(currentUser.id, datos)
					.then(response => {
						console.log("RESPONSE updatePerfilCandidato: ", response);
					}).catch(error => {
						console.log("ERROR updatePerfilCandidato: ", error);
					});
					break;
				case FORM_POSTULANTE_LABORAL:
					updatePerfilLaboral(currentUser.id, datos)
					.then(response => {
						console.log("RESPONSE updatePerfilLaboral: ", response);
					}).catch(error => {
						console.log("ERROR updatePerfilLaboral: ", error);
					});
					break;
				case FORM_EMPRESA:
					updatePerfilEmpresa(currentUser.id, datos)
					.then(response => {
						console.log("RESPONSE updatePerfilEmpresa: ", response);
					}).catch(error => {
						console.log("ERROR updatePerfilEmpresa: ", error);
					});
					break;
				case FORM_NUEVA_OFERTA:
						
						console.log("DATOS: ", datos)
						createOferta(currentUser.id, datos)
						.then(response => {
							console.log("RESPONSE createOferta: ", response);
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
    let lastStage = this.props.formConfig.totalStages - 1;

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
  /*
  addTitulo = (inputIdentifier) => {
    const clone = {...this.cloneStateElementsArray(inputIdentifier)}

    let idAppend = clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements.length/3;
    let newTitulo = getNewTitulo(idAppend);

    const newElementsArray = clone.elementsArray.concat(newTitulo);

    clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = newElementsArray;

    this.setState({
      form: clone.updatedForm
    });
  }

  addCurso = (inputIdentifier) => {
    const clone = {...this.cloneStateElementsArray(inputIdentifier)}

    let idAppend = clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements.length/4;
    let newCurso = getNewCurso(idAppend);

    const newElementsArray = clone.elementsArray.concat(newCurso);

    clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = newElementsArray;

    this.setState({
      form: clone.updatedForm
    });
  }

  addExperiencia = (inputIdentifier, NumberOfFieldsToAdd) => {
    const clone = {...this.cloneStateElementsArray(inputIdentifier)}

    let idAppend = clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements.length/NumberOfFieldsToAdd;
		let newExperiencia = getNewExperienciaLaboral(idAppend);
		
    const newElementsArray = clone.elementsArray.concat(newExperiencia);
    clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = newElementsArray;

    this.setState({
      form: clone.updatedForm
    });
	}
	*/
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

    for (let i=0; i<this.props.formConfig.totalStages; i++)
      this.formatData(formData, i)
  }
	
	formatData = (formData, currentStage) => {
		const updatedForm = {
      ...this.props.formConfig
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

    for (let field in updatedStageFields) {
			let currentField = {...updatedStageFields[field]};
			let currentFieldElements = {...currentField.elements}
			for (let element in currentFieldElements) {
        const id = currentFieldElements[element].elementConfig.id;
        //console.log('formData[field]')
        //console.log(formData[field], id)
				if (formData[field]) {
          if (id === 'fechaNacimiento')
            currentFieldElements[element].value = new Date(formData[field]);

          else if (formData[field].id)
            currentFieldElements[element].value = formData[field].id;

          else
					  currentFieldElements[element].value = formData[field];
					//console.log(field, formData[field])
				}
			}
		}
		this.setState({
			form: updatedForm
		})
	}

	componentDidMount() {
		if(this.props.formConfig != null) {
			let currentEndpoint = this.props.formConfig.endpoint+('/')+this.props.currentUser.id+('/')//this.props.currentUser.id+('/')
			switch(this.props.formConfig.id) {
				//case(0): //formCuentaUsuario, probablemente a futuro
				//  break;
				case(1): //formEmpresa
					currentEndpoint = currentEndpoint + 'perfilEmpresa'
					console.log(currentEndpoint)
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