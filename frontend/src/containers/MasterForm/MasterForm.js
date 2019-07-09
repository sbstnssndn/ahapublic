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
//import '../../custom.css'

class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    formData: null,
    missing: [],
		show: false,
    endpoint: '',
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
		this.setState({ show: false });
	}

  handleValidation = (event, inputIdentifier, element) => {
    const clone = {...this.cloneStateElementsArray(inputIdentifier)}

    let missing = this.state.missing

    this.setState({ show: false })

    for (let elem in clone.elementsArray) {
      console.log(clone.elementsArray[elem].elementConfig.id)
      if(clone.elementsArray[elem].elementConfig.id === element) {

        const resp = fieldFormValidation(missing, element, event.target.value)

        missing = resp.missing
        clone.elementsArray[elem].subtext = resp.subtext
      }

      clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements[elem] = clone.elementsArray[elem];
    } 

    console.log('missing: {'+missing+'}')

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

    console.log('form:')
    console.log(this.state.form)
  }

  handleSubmit = (event, method) => {
    event.preventDefault();
    
    // Si el array missing esta vacio, significa que no hay campos incorrectos
    // En ese caso, "!this.state.missing.length" devuelve true
    if (!this.state.missing.length) {
      // extraer los datos de cada form, dentro de cada etapa
      let payload = Object.create(null);
        /*for (let index in this.props.formConfig.stages) {
            for (let formElementIdentifier in this.props.formConfig.stages[index].fields) {
          // poblar objeto con todos los datos del formulario
          payload[formElementIdentifier] = this.props.formConfig.stages[index].fields[formElementIdentifier].value;
            }
      }*/
      console.log(this.props.formConfig);
      for (let index in this.props.formConfig.stages){
        for (let formElementIdentifier in this.props.formConfig.stages[index].fields) {
          for (let index2 in this.props.formConfig.stages[index].fields[formElementIdentifier].elements){
            payload[formElementIdentifier] = this.props.formConfig.stages[index].fields[formElementIdentifier].elements[index2].value;
          }
        }
      }
      console.log(payload);
      console.log('metodo: '+method);
      //window.location.href = "http://localhost:3000/";
      
      switch( method.toLowerCase() ) {
        case 'get':
          axios.get(this.state.endpoint)
            .then(response => {
              console.log(response);
              this.setState({formData: response.data});
            })
            .catch(function(error){
              console.log(error);
            })
          break;
        case 'post':
          axios.post(this.state.endpoint, payload)
            .then(response => {
              console.log(response);
            })
            .catch(function(error){
              console.log(error);
            })
          break;
        default:
          console.log("Debes introducir un método válido");
          break;
      }
    }

    else {
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

    this.formatData(formData)
  }
	
	formatData = (formData) => {
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

    console.log(updatedStageFields)

    for (let field in updatedStageFields) {
			let currentField = {...updatedStageFields[field]};
			let currentFieldElements = {...currentField.elements}
			for (let element in currentFieldElements) {
				if (formData[field] != null) {
					currentFieldElements[element].value = formData[field];
					console.log(field, formData[field])
				}
			}
		}
		this.setState({
			form: updatedForm
		})
	}

	componentDidMount() {
    let currentEndpoint = this.props.formConfig.endpoint+('/')+this.props.currentUser.id+('/')
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