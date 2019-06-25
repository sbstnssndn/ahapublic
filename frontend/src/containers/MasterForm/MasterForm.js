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


class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    formData: '',
    missing: [],
    show: false,
    errorMessage: "Ups! Hay campos con errores"
  }

  handleDismiss = () => this.setState({ show: false });

  handleValidation = (event, inputIdentifier, element) => {
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

    const updatedFieldElements = {
      ...updatedStageFields[inputIdentifier].elements
    }

    const elementsArray = [];
    for (let elem in updatedFieldElements) {
      elementsArray.push({
        ...updatedFieldElements[elem]
      })
    }

    let missing = this.state.missing

    for (let elem in elementsArray) {
      console.log(elementsArray[elem].elementConfig.id)
      if(elementsArray[elem].elementConfig.id === element) {

        const singleField = event.target.value

        switch(element){
          case('firstName'):
          case('lastName'):
          case('personaQueEntrevista'):
            if (singleField === '' || nameIsValid(singleField)) {
              elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              elementsArray[elem].subtext = 'No se permiten números ni caracteres especiales (/, #, $, etc)'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          case('rut'):
            if (singleField === '' || rutIsValid(singleField)) {
              elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              elementsArray[elem].subtext = 'Rut incorrecto'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          case('correo2'):
          case('email'):
            if (singleField === '' || emailIsValid(singleField)) {
              elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              elementsArray[elem].subtext = 'Correo electrónico incorrecto'
              missing = fillValidArray(missing, element, 'push')
            }
            break;
          
          case('telefono1'):
          case('telefono2'):
          case('telefono'):
            if (singleField === '' || phoneIsValid(singleField)) {
              elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              elementsArray[elem].subtext = 'El teléfono es incorrecto'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          case('password'):
            if (singleField === '' || passwordLengthIsValid(singleField)) {
              elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              elementsArray[elem].subtext = 'La contraseña debe ser entre 6 y 30 caracteres'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          case('expectativaSueldo'):
            if (singleField === '' || moneyIsValid(singleField)) {
              elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              elementsArray[elem].subtext = 'El monto ingresado es incorrecto'
              missing = fillValidArray(missing, element, 'push')
            }
            break;

          default:
            if (singleField === '' || genericIsValid(singleField)) {
              elementsArray[elem].subtext = ''
              missing = fillValidArray(missing, element, 'pop')
            }
            else {
              elementsArray[elem].subtext = 'El valor ingresado supera la cantidad máxima permitida'
              missing = fillValidArray(missing, element, 'push')
            }
        }
        }

        updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements[elem] = elementsArray[elem];
      } 

      console.log('missing: {'+missing+'}')  

      this.setState({
        form: updatedForm,
        missing: missing,
      });   
  }

  // handleChange(event, firstName)
  handleChange = (event, inputIdentifier, element, elementIndentifier) => {
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

    for (let elem in elementsArray) {
      //console.log(elementsArray[elem].elementConfig.id)
      if(elementsArray[elem].elementConfig.id === element) {
        if (elementIndentifier === 'date'){
          elementsArray[elem].value = event
        }
        else {
          elementsArray[elem].value = event.target.value;
        }
        updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements[elem] = elementsArray[elem];
      }   
      
    }
    this.setState({
      form: updatedForm
    });

    // para cada elemento del form group, capturar su value y modificarlo

    
    /* objeto clonado para no mutar el estado al cambiar "value"
    updatedFormElement = {
      "elementType": "input",
      "elementConfig": {
        "type": "text",
        "placeholder": "Juan Alberto"
      },
      "value": "",
      "rules": {
        "required": true
      },
      "valid": false
      }
    */

    /*
    updatedFormElement.value = event.target.value;
    // guardar en el clon del form original, el nuevo elemento del formulario
    updatedForm.stages[this.state.currentStage].fields[inputIdentifier] = updatedFormElement;

    console.log(event.target.selectedOptions);
    
    this.setState({
      form: updatedForm
    });*/
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

    let idAppend = updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements.length/4;
    let newCurso = [
      {
        label: 'Curso de capacitación',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Administración pública',
          name: 'curso' + idAppend,
          id: 'curso' + idAppend
        },
        value: ''
      },
      {
        label: 'Institución donde se realizó',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Universidad de Santiago de Chile',
          name: 'institucionCurso' + idAppend,
          id: 'institucionCurso' + idAppend
        },
        value: ''
      },
      {
        label: 'Fecha de inicio',
        elementType: 'input',
        elementConfig: {
          type: 'date',
          placeholder: '20/04/2010',
          name: 'fechaInicioCurso' + idAppend,
          id: 'fechaInicioCurso' + idAppend
        },
        value: new Date()
      },
      {
        label: 'Fecha de término',
        elementType: 'input',
        elementConfig: {
          type: 'date',
          placeholder: '15/06/2010',
          name: 'fechaTerminoCurso' + idAppend,
          id: 'fechaTerminoCurso' + idAppend
        },
        value: new Date()
      }
    ]

    console.log(elementsArray)

    const newElementsArray = elementsArray.concat(newCurso);

    console.log(newElementsArray)

    updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = newElementsArray;

    this.setState({
      form: updatedForm
    });
  }

  addExperiencia = (inputIdentifier, NumberOfFieldsToAdd) => {
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

    let idAppend = updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements.length/NumberOfFieldsToAdd;
    let newExperiencia = [
      {
        label: 'Empresa',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'AHA Inclusión',
          name: 'empresaExperienciaLaboral' + idAppend,
          id: 'empresaExperienciaLaboral' + idAppend
        },
        value: ''
      },
      {
        label: 'Fecha de inicio',
        elementType: 'input',
        elementConfig: {
          type: 'date',
          placeholder: new Date(),
          name: 'expFechaInicio' + idAppend,
          id: 'expFechaInicio' + idAppend
        },
        value: new Date()
      },
      {
        label: 'Fecha de término',
        elementType: 'input',
        elementConfig: {
          type: 'date',
          placeholder: new Date(),
          name: 'expFechaTermino' + idAppend,
          id: 'expFechaTermino' + idAppend
        },
        value: new Date()
      },
      {
        label: 'Indica tu cargo',
        elementType: 'select',
        elementConfig: {
          name: 'expArea' + idAppend,
          id: 'expArea' + idAppend,
          options: [
            { value: '', displayValue: 'Seleccione...', disabled: true },
            { value: '00', displayValue: 'Administración, contabilidad o finanzas' },
            { value: '01', displayValue: 'Aduana y comercio exterior' },
            { value: '02', displayValue: 'Abastecimiento o Logística' },
            { value: '03', displayValue: 'Agrícola o Ganadero' },
            { value: '04', displayValue: 'Auxiliar de Aseo o Servicios de Alimentación' },
            { value: '05', displayValue: 'Atención al Cliente, Call Center o Telemarketing' },
            { value: '06', displayValue: 'Ingeniería Civil y Construcción' },
            { value: '07', displayValue: 'Comercial, Ventas o Negocios' },
            { value: '08', displayValue: 'Comunicación, Relaciones Públicas o Institucionales' },
            { value: '09', displayValue: 'Construcción' },
            { value: '10', displayValue: 'Diseño' },
            { value: '11', displayValue: 'Educación, Docencia o Investigación' },
            { value: '12', displayValue: 'Gastronomía y Turismo' },
            { value: '13', displayValue: 'Gerencia y Dirección General' },
            { value: '14', displayValue: 'Ingenierías' },
            { value: '15', displayValue: 'Legal' },
            { value: '16', displayValue: 'Mantención de áreas verdes o jardinería' },
            { value: '17', displayValue: 'Marketing y Publicidad' },
            { value: '18', displayValue: 'Minería, Petróleo o Gas' },
            { value: '19', displayValue: 'Operaciones' },
            { value: '20', displayValue: 'Producción y Manufactura' },
            { value: '21', displayValue: 'Recursos Humanos o Formación' },
            { value: '22', displayValue: 'Salud, Medicina y Farmacia' },
            { value: '23', displayValue: 'Secretaría y Recepción' },
            { value: '24', displayValue: 'Seguridad o Vigilancia' },
            { value: '25', displayValue: 'Tecnología, Informática, Sistemas' },
            { value: '26', displayValue: 'Textil y Confección' },
            { value: '27', displayValue: 'Transporte' }
          ]
        },
        value: ''
      }
    ]

    //console.log(elementsArray)

    const newElementsArray = elementsArray.concat(newExperiencia);

    //console.log(newElementsArray)

    updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = newElementsArray;

    this.setState({
      form: updatedForm
    });
  }
  
  deleteExperiencia = (inputIdentifier, idExperiencia, NumberOfFieldsToDelete, ) => {
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

    // antes de borrar, actualizar los names de los inputs, para que al eliminar el 1 de [0,1,2], el nuevo que se cree, no sea 2, dando [0,2(nuevo),2]
    // foreach element de elements, actualizar name, id desde 0 a lenght-1
    console.log("ANTES", elementsArray)
    console.log(idExperiencia, NumberOfFieldsToDelete)

    elementsArray.splice(idExperiencia, NumberOfFieldsToDelete);

    let contadorId = -1;
    for (let element=0; element < elementsArray.length; element++) {
      if (element % NumberOfFieldsToDelete === 0)
        contadorId++;
      // ingresar máximo 10 cursos
      let id = elementsArray[element].elementConfig.id;
      let name = elementsArray[element].elementConfig.name;
      elementsArray[element].elementConfig.id = id[id.length-1] + contadorId;
      elementsArray[element].elementConfig.name = name[name.length-1] + contadorId;     
    }

    console.log("DESPUES", elementsArray)
    updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = elementsArray;

    this.setState({
      form: updatedForm
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
              { this.state.errorMessage }
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