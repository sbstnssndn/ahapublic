import React, { Component } from 'react';
import Stage from '../../components/Stage/Stage';

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
              name: 'nombre'
            },
            value: ''
          },
          direccion: {
            label: 'Dirección',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Pasaje Rauco 755',
              name: 'direccion'
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
              name: 'comentarios'
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
              name: 'nombre'
            },
            value: ''
          },
          direccion: {
            label: 'Dirección',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Pasaje Rauco 755',
              name: 'direccion'
            },
            value: ''
          }
        }
      }
    ]
  }

  handleChange = (event) => {
    /* el objeto event tiene la propiedad target,
    * que a su vez, tiene las propiedades name y value
    * se extraen estas propiedades para manejar
    * cualquier tipo de evento en un form con
    * name = event.target.name
    */
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //const { email, username, password } = this.state
    alert("Formulario enviado");
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
        />
      ))
    )

    return (
      <React.Fragment>
        <h1>Formulario de registro</h1>
        <h2>Stepper. Etapa actual: {this.state.currentStage+1}</h2>
        <form onSubmit={this.handleSubmit}>
          {stages}
          <h2>Barra de progreso</h2>
          { this.botonAnterior() }
          { this.botonSiguiente() }
        </form>
      </React.Fragment>
    );
  }

}

export default MasterForm;