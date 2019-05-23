import React, { Component } from 'react';
import Stage from '../../components/Stage/Stage';
//import axios from 'axios';

class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    totalStages: 3,
    stages: [
      {
        id: 0,
        title: 'Datos de usuario',
        inputs: {
          rut: {
            label: 'RUT',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Juan Pérez',
              name: 'rut',
              id: 'rut'
            },
            value: ''
          },
          firstName: {
            label: 'Primer nombre',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Juan',
              name: 'firstName',
              id: 'firstName'
            },
            value: ''
          },
          lastName: {
            label: 'Apellido',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Pérez',
              name: 'lastName',
              id: 'lastName'
            },
            value: ''
          },
          location: {
            label: 'Dirección',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Av. Pajaritos 754, casa 64',
              name: 'location',
              id: 'location'
            },
            value: ''
          },
          email: {
            label: 'Correo electrónico',
            inputStyle: 'input',
            inputConfig: {
              type: 'email',
              placeholder: 'juan.perez@gmail.com',
              name: 'email',
              id: 'email'
            },
            value: ''
          }
        }
      },
      {
        id: 1,
        title: 'Datos de discapacidad',
        inputs: {
          credencial: {
            label: '¿Tiene credencial de discapacidad?',
            inputStyle: 'select',
            inputConfig: {
              name: 'credencial',
              id: 'credencial',
              options: [
                { value: '', displayValue: 'Seleccione...', disabled: true },
                { value: 'si', displayValue: 'Si' },
                { value: 'no', displayValue: 'No' }
              ]
            },
            value: ''
          },
          sillaRuedas: {
            label: '¿Utiliza silla de ruedas?',
            inputStyle: 'select',
            inputConfig: {
              name: 'sillaRuedas',
              id: 'sillaRuedas',
              options: [
                { value: '', displayValue: 'Seleccione...', disabled: true },
                { value: 'si', displayValue: 'Si' },
                { value: 'no', displayValue: 'No' }
              ]
            },
            value: ''
          },
          dAuditiva: {
            label: 'Grado de discapacidad auditiva',
            inputStyle: 'select',
            inputConfig: {
              name: 'dAuditiva',
              id: 'dAuditiva',
              options: [
                { value: '', displayValue: 'Seleccione...', disabled: true },
                { value: '0', displayValue: '0%' },
                { value: '25', displayValue: '25%' },
                { value: '50', displayValue: '50%' },
                { value: '75', displayValue: '75%' },
                { value: '100', displayValue: '100%' },
              ]
            },
            value: ''
          },
          dFisica: {
            label: 'Grado de discapacidad física',
            inputStyle: 'select',
            inputConfig: {
              name: 'dFisica',
              id: 'dFisica',
              options: [
                { value: '', displayValue: 'Seleccione...', disabled: true },
                { value: '0', displayValue: '0%' },
                { value: '25', displayValue: '25%' },
                { value: '50', displayValue: '50%' },
                { value: '75', displayValue: '75%' },
                { value: '100', displayValue: '100%' },
              ]
            },
            value: ''
          },
          dIntelectual: {
            label: 'Grado de discapacidad intelectual',
            inputStyle: 'select',
            inputConfig: {
              name: 'dIntelectual',
              id: 'dIntelectual',
              options: [
                { value: '', displayValue: 'Seleccione...', disabled: true },
                { value: '0', displayValue: '0%' },
                { value: '25', displayValue: '25%' },
                { value: '50', displayValue: '50%' },
                { value: '75', displayValue: '75%' },
                { value: '100', displayValue: '100%' },
              ]
            },
            value: ''
          },
          dPsiquica: {
            label: 'Grado de discapacidad psíquica',
            inputStyle: 'select',
            inputConfig: {
              name: 'dPsiquica',
              id: 'dPsiquica',
              options: [
                { value: '', displayValue: 'Seleccione...', disabled: true },
                { value: '0', displayValue: '0%' },
                { value: '25', displayValue: '25%' },
                { value: '50', displayValue: '50%' },
                { value: '75', displayValue: '75%' },
                { value: '100', displayValue: '100%' },
              ]
            },
            value: ''
          },
          dVisual: {
            label: 'Grado de discapacidad visual',
            inputStyle: 'select',
            inputConfig: {
              name: 'dVisual',
              id: 'dVisual',
              options: [
                { value: '', displayValue: 'Seleccione...', disabled: true },
                { value: '0', displayValue: '0%' },
                { value: '25', displayValue: '25%' },
                { value: '50', displayValue: '50%' },
                { value: '75', displayValue: '75%' },
                { value: '100', displayValue: '100%' },
              ]
            },
            value: ''
          }
        }
      },
      {
        id: 2,
        title: 'Experiencia laboral',
        inputs: {
          nivelEducacional: {
            label: 'Nivel educacional',
            inputStyle: 'select',
            inputConfig: {
              name: 'nivelEducacional',
              id: 'nivelEducacional',
              options: [
                { value: '', displayValue: 'Seleccione...', disabled: true },
                { value: 'basica incompleta', displayValue: 'Básica incompleta' },
                { value: 'basica completa', displayValue: 'Básica completa' },
                { value: 'media incompleta', displayValue: 'Media incompleta' },
                { value: 'media completa', displayValue: 'Media completa' },
                { value: 'técnica incompleta', displayValue: 'Técnica incompleta' },
                { value: 'técnica completa', displayValue: 'Técnica completa' },
                { value: 'superior incompleta', displayValue: 'Superior incompleta' },
                { value: 'superior completa', displayValue: 'Superior completa' },
              ]
            },
            value: ''
          },
          firstName: {
            label: 'Primer nombre',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Juan',
              name: 'firstName',
              id: 'firstName'
            },
            value: ''
          },
          lastName: {
            label: 'Apellido',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Pérez',
              name: 'lastName',
              id: 'lastName'
            },
            value: ''
          },
          location: {
            label: 'Dirección',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Av. Pajaritos 754, casa 64',
              name: 'location',
              id: 'location'
            },
            value: ''
          },
          email: {
            label: 'Correo electrónico',
            inputStyle: 'input',
            inputConfig: {
              type: 'email',
              placeholder: 'juan.perez@gmail.com',
              name: 'email',
              id: 'email'
            },
            value: ''
          }
        }
      }
    ]
  }

  handleChange = (event, currentStage, inputIdentifier) => {
    /* TO DO: Mejorar performance de esta función 
    *  No es necesario convertir a obj y luego a array
    *  Creo que tampoco es necesario hacer tanto spread
    *  para elementos de 'stage' que no van a mutar
    */

    // copiar el estado actual de las etapas. NO MUTAR!
    const updatedStages = {
      ...this.state.stages
    }
    
    const updatedCurrentStage = {
      ...updatedStages[currentStage]
    }

    const updatedInputs = {
      ...updatedCurrentStage.inputs
    }

    const updatedFormInput = {
      ...updatedInputs[inputIdentifier]
    }
    
    updatedFormInput.value = event.target.value;

    updatedStages[currentStage].inputs[inputIdentifier] = updatedFormInput;

    const updatedStagesArray = Object.values(updatedStages)
  
    /* el objeto event tiene la propiedad target,
    * que a su vez, tiene las propiedades name y value
    * se extraen estas propiedades para manejar
    * cualquier tipo de evento en un form con
    * name = event.target.name
    */
    //const {name, value} = event.target;
    this.setState({
      stages: updatedStagesArray
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //const { email, username, password } = this.state
    
    const formData = [];
    for (let index in this.state.stages) {
      // para cada etapa, extraer los ids y values de los campos
      //console.log('hola: ' + this.state.stages[index].inputs.nombre.value);
      for (let formElementIdentifier in this.state.stages[index].inputs) {
        //console.log('chao: ' + stage.inputs[formElementIdentifier].value);
        formData[formElementIdentifier] = this.state.stages[index].inputs[formElementIdentifier].value;
        
      }
    }
    console.log(formData);
    /*
    axios.post('http://localhost:8080/api/user/add', {
      rut: 'asdf',
      firstName: 'hola',
      lastName: 'chao',
      email: 'sadf@lol.com'
    }).then(response => {
      console.log(response);
    }).catch(error => {
      //console.log(error);
    });
    */
  }
  /* // PRUEBA GET: OK
  componentDidMount() {
    axios.get('http://localhost:8080/api/user/all')
    .then(response => {
      console.log(response);
    }).catch(error => {
      //console.log(error);
    });
  }
  */
  _next = () => {
    let currentStage = this.state.currentStage;
    let lastStage = this.state.totalStages - 1;

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

  botonAnterior() {
    let currentStage = this.state.currentStage;
    let firstStage = 0;

    if (currentStage !== firstStage){
        return (
        <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Volver
        </button>
        );
    }
    return null;
  }

  botonSiguiente(){
      let currentStage = this.state.currentStage;
      let lastStage = this.state.totalStages - 1;

      if (currentStage < lastStage){
          return (
          <button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}>
          Siguiente
          </button>        
          );
      }
      return null;
  }
  
  render () {

    let stages = (
      this.state.stages.map(stage => (
        <Stage
          key={stage.id}
          id={stage.id}
          title={stage.title}
          inputs={stage.inputs}
          handleChange={this.handleChange}
          currentStage={this.state.currentStage}
          totalStages={this.state.totalStages}
        />
      ))
    )

    let sendButton = null;
    if (this.state.currentStage === this.state.totalStages - 1) {
      sendButton = (
        <div className="pb-2">
          <input type="submit" value="Guardar datos" className="btn btn-success btn-lg btn-block" />
        </div>
      )
    }

    return (
      <React.Fragment>
        <div className="col">
          <h1>Formulario de registro</h1>
          <form onSubmit={this.handleSubmit}>
            {stages}
            <h2>Barra de progreso</h2>
            { sendButton }
            { this.botonAnterior() }
            { this.botonSiguiente() }
          </form>
        </div>
      </React.Fragment>
    );
  }

}

export default MasterForm;