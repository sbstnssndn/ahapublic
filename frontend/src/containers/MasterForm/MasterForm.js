import React, { Component } from 'react';
import Stage from '../../components/Stage/Stage';
import Axios from 'axios';

class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    totalStages: 1,
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
            label: 'Segundo nombre',
            inputStyle: 'input',
            inputConfig: {
              type: 'text',
              placeholder: 'Pérez',
              name: 'lastName',
              id: 'lastName'
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
    
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"
      }
    }
    let datos = {
      rut: 'asdf',
      firstName: 'lol',
      lastName: 'chao',
      email: 'mail@gmail.com'
    }
    Axios.post('http://localhost:8080/api/user/add', datos, axiosConfig)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    Axios.get( 'http://localhost:8080/api/user/all' )
      .then( response => {
        console.log(response);
        //this.props.history.push('/');
      })
      .catch( error => {
        console.log(error);
      })
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
          totalStages={this.state.totalStages}
        />
      ))
    )

    let sendButton = null;
    if (this.state.currentStage === this.state.totalStages - 1) {
      sendButton = <input type="submit" value="Guardar datos" className="btn btn-success btn-block" />;
    }

    return (
      <React.Fragment>
        <h1>Formulario de registro</h1>
        <h2>Stepper. Etapa actual: {this.state.currentStage+1}</h2>
        <form onSubmit={this.handleSubmit}>
          {stages}
          <h2>Barra de progreso</h2>
          { this.botonAnterior() }
          { this.botonSiguiente() }
          { sendButton }
        </form>
      </React.Fragment>
    );
  }

}

export default MasterForm;