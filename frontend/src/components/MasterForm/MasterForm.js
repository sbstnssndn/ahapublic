import React, { Component } from 'react';
import Stage from '../Stage/Stage.js';
import { Button } from 'react-bootstrap';

class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    totalStages: 3,
    stages: [
      {
        id: 0,
        title: 'Datos Personales',
        inputs: {
          nombre: {
            label: 'Nombre',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Juan Pérez',
              name: 'nombre',
              id: 'nombre'
            },
            value: ''
          },
          direccion: {
            label: 'Dirección',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Pasaje Rauco 755',
              name: 'direccion',
              id: 'direccion'
            },
            value: ''
          }
        }
      },
      {
        id: 1,
        title: 'Perfil laboral',
        inputs: {
          credencial: {
            label: '¿Tiene credencial de discapacidad?',
            inputStyle: 'select',
            inputConfig: {
              name: 'credencial',
              id: 'credencial',
              options: [
                { value: '', displayValue: 'Seleccione', disabled: true },
                { value: 'si', displayValue: 'Si' },
                { value: 'no', displayValue: 'No' }
              ]
            },
            value: ''
          },
          comentarios: {
            label: 'Comentarios',
            inputStyle: 'textarea',
            inputConfig: {
              type: 'text',
              placeholder: 'Ingrese comentarios...',
              name: 'comentarios',
              id: 'comentarios'
            },
            value: ''
          }
        }
      },
      {
        id: 2,
        title: 'Datos Personales',
        inputs: {
          nombre: {
            label: 'Nombre',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Juan Pérez',
              name: 'nombre',
              id: 'nombre'
            },
            value: ''
          },
          direccion: {
            label: 'Dirección',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Pasaje Rauco 755',
              name: 'direccion',
              id: 'direccion'
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
    //alert("Formulario enviado");
    const FormData = [];
    for (let stage in this.state.stages) {
      // para cada etapa, extraer los ids y values de los campos
      for (let formElementIdentifier in stage.inputs) {
        console.log(stage.inputs[formElementIdentifier].value);
        //FormData[formElementIdentifier] = stage.inputs[formElementIdentifier].value;
      }
    }
  }

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
        <Button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Volver
        </Button>
        );
    }
    return null;
  }

  botonSiguiente(){
      let currentStage = this.state.currentStage;
      let lastStage = this.state.totalStages - 1;

      if (currentStage < lastStage){
          return (
          <Button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}>
          Siguiente
          </Button>        
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
      sendButton = <Button className="btn btn-success btn-block">Guardar datos</Button>
    }

    return (
      <React.Fragment>
        <h2>Formulario de registro</h2>
        <h3>Etapa actual: {this.state.currentStage+1}</h3>
        
        <form onSubmit={this.handleSubmit}>
          {stages}
          { this.botonAnterior() }
          { this.botonSiguiente() }
          { sendButton }
        </form>
        
      </React.Fragment>
    );
  }

}

export default MasterForm;