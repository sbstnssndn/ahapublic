import React, { Component } from 'react';
import Stage from './Stage/Stage';
import axios from 'axios';
import Stepper from './Stepper/Stepper';
import StageControls from './StageControls/StageControls';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { 
  emailIsValid,
  passwordLengthIsValid,
  rutIsValid,
  phoneIsValid,
  nameIsValid,
  moneyIsValid,
  genericIsValid,
  fillValidArray,
   } from '../../util/ValidationUtils';
import { getNewCurso, getNewExperienciaLaboral } from '../../constants/experienciaFormElements';


class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    formData: '',
    missing: [],
    show: false,
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

  handleDismiss = () => this.setState({ show: false });

  handleValidation = (event, inputIdentifier, element) => {
    const clone = {...this.cloneStateElementsArray(inputIdentifier)}

    let missing = this.state.missing

    this.setState({ show: false })

    for (let elem in clone.elementsArray) {
      console.log(clone.elementsArray[elem].elementConfig.id)
      if(clone.elementsArray[elem].elementConfig.id === element) {

        const singleField = event.target.value

        switch(element){
          case('firstName'):
          case('lastName'):
          case('personaQueEntrevista'):
            if (singleField === '' || nameIsValid(singleField)) {
              clone.elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              clone.elementsArray[elem].subtext = 'No se permiten números ni caracteres especiales (/, #, $, etc)'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          case('rut'):
            if (singleField === '' || rutIsValid(singleField)) {
              clone.elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              clone.elementsArray[elem].subtext = 'Rut incorrecto'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          case('correo2'):
          case('email'):
            if (singleField === '' || emailIsValid(singleField)) {
              clone.elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              clone.elementsArray[elem].subtext = 'Correo electrónico incorrecto'
              missing = fillValidArray(missing, element, 'push')
            }
            break;
          
          case('telefono1'):
          case('telefono2'):
          case('telefono'):
            if (singleField === '' || phoneIsValid(singleField)) {
              clone.elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              clone.elementsArray[elem].subtext = 'El teléfono es incorrecto'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          case('password'):
            if (singleField === '' || passwordLengthIsValid(singleField)) {
              clone.elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              clone.elementsArray[elem].subtext = 'La contraseña debe ser entre 6 y 30 caracteres'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          case('expectativaSueldo'):
            if (singleField === '' || moneyIsValid(singleField)) {
              clone.elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              clone.elementsArray[elem].subtext = 'El monto ingresado es incorrecto'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          default:
            if (singleField === '' || genericIsValid(singleField)) {
              clone.elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              clone.elementsArray[elem].subtext = 'El valor ingresado supera la cantidad máxima permitida'
              missing = fillValidArray(missing, element, 'push')
            }
        }
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
  }

  componentDidMount() {
    
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
          axios.get(this.props.formConfig.endpoint)
            .then(response => {
              console.log(response);
              this.setState({formData: response.data});
            })
            .catch(function(error){
              console.log(error);
            })
          break;
        case 'post':
          axios.post(this.props.formConfig.endpoint, payload)
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
  
  deleteExperiencia = (inputIdentifier, idExperiencia, NumberOfFieldsToDelete) => {
		const clone = {...this.cloneStateElementsArray(inputIdentifier)}
		// eliminar los elements del form que corresponden
		// desde el índice de la experiencia, eliminar X número de campos
		clone.elementsArray.splice(idExperiencia, NumberOfFieldsToDelete);

    let contadorId = -1;
    for (let element=0; element < clone.elementsArray.length; element++) {
      if (element % NumberOfFieldsToDelete === 0) {
				contadorId++;
			}
			// ingresar máximo 10 cursos
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

  render () {

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
          addExperiencia={this.addExperiencia}
          addCurso={this.addCurso}
          deleteExperiencia={this.deleteExperiencia}
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
          {/*ALERT*/}
          <Alert
              className="mb-0 mt-2"
              variant="danger"
              show={this.state.show}
              onClose={this.handleDismiss}
              dismissible>
              "Ups! Hay campos con errores"
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