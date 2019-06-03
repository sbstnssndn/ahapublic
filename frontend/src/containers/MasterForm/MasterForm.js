import React, { Component } from 'react';
import Stage from '../../components/Stage/Stage';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import axios from 'axios';

class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    totalStages: 3,
    stages: []
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

    //alert("Datos ingresados!");
    
    //Según tipo de formulario, se requiere una api rest distinta para el guardado de datos

    // 1 -> Formulario de Postulante
    if(this.props.tipoFormulario == 1){

      /* Nuevo objeto de perfil de discapacidad */
      axios.get('http://localhost:8080/api/perfilDiscapacidad/new')
      .then(response => {
        
        console.log(response.data);
        
        /* Asignamos los valores del formulario al nuevo objeto*/
        response.data.name = formData.firstName + " " + formData.lastName;
        response.data.credencial = formData.credencial;
        response.data.dAuditiva = formData.dAuditiva;
        response.data.dFisica = formData.dFisica;
        response.data.dIntelectual = formData.dIntelectual;
        response.data.dPsiquica = formData.dPsiquica;
        response.data.dVisual = formData.dVisual;
        response.data.sillaDeRuedas = formData.sillaRuedas;
        
        console.log(response.data);

        /* Guardamos el objeto actualizado con los datos del formulario */
        axios.post('http://localhost:8080/api/perfilDiscapacidad/add', response.data)
        .then(response => {
          console.log("Guardado exitoso");
        }).catch(error => {
          console.log(error);
        })

      }).catch(error => {
          console.log(error);
      });

    }

    // 2 -> Formulario de Oferta
    else if(this.props.tipoFormulario == 2){
      console.log("Guardando dato oferta");

      
    }

    //window.location.href = "http://localhost:3000/";
  }

  componentDidMount() {
    this.setState({
      stages: this.props.stages,
      tipoFormulario: this.props.tipoFormulario
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
      sendButton = (
        <div className="pb-2">
          <input type="submit" value="Guardar datos" className="btn btn-success btn-lg btn-block" />
        </div>
      )
    }

    return (
      <React.Fragment>
        <div className="col">
          <h1>{this.props.titulo} - {this.props.tipoFormulario}</h1>
          <form onSubmit={this.handleSubmit}>
            {stages}
            <ProgressBar />
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