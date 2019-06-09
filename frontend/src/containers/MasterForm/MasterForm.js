import React, { Component } from 'react';
import Stage from '../../components/Stage/Stage';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stepper from '../../components/Stepper/Stepper';

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
  
  addWork = (event) => {
    event.preventDefault();
    console.log(this.state);
    console.log(this.props.tipoFormulario);
    /////////////////////////////////////////////////////////////////////////////////////////////
    /* Llenar de alguna forma en el JSON los nuevos campos para nuevas experiencias anteriores */
    /////////////////////////////////////////////////////////////////////////////////////////////
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = [];
    for (let index in this.state.stages) {
      // para cada etapa, extraer los ids y values de los campos
      for (let formElementIdentifier in this.state.stages[index].inputs) {
        formData[formElementIdentifier] = this.state.stages[index].inputs[formElementIdentifier].value;
      }
    }
    console.log(formData);
    /*
    if (this.props.tipoFormulario === "postulante"){

			axios.post('http://localhost:8080/api/perfilDiscapacidad/add', formData)
			.then(response => {
				console.log(response.data);
			}).catch(error => {
				console.log(error);
			});

    } else if (this.props.tipoFormulario === "oferta") {

			axios.post('http://localhost:8080/api/perfilAccesibilidad/add', formData)
			.then(response => {
				console.log(response.data);
			}).catch(error => {
				console.log(error);
			});
      
    }*/
    //window.location.href = "http://localhost:3000/";
  }

  componentDidMount() {
    this.setState({
      stages: this.props.stages,
      tipoFormulario: this.props.tipoFormulario
    })
	}
	
	_goto = (stage) => {
    this.setState({
      currentStage: stage
    });
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
          <Button variant="secondary" onClick={this._prev}>
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
				<Button variant="primary" onClick={this._next}> 
				Siguiente
				</Button>        
				);
		}
		return null;
  }
  
  render () {

		let stageTitles = [];
		this.state.stages.map(stage => (
			stageTitles.push(stage.title)
		))

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
      if (this.props.tipoFormulario === "postulante") {
        sendButton = (
          <Button variant="success" onClick={this.handleSubmit}>
            Guardar datos
          </Button>
        )
      }
    }

    let newWork = null;
    if (this.state.currentStage === this.state.totalStages - 1){
      newWork = (
        <Button onClick={ this.addWork }> + </Button>
      )
    }

    return (
      <React.Fragment>
        <Container fluid>
					<Stepper currentStage={this.state.currentStage} totalStages={this.state.totalStages} goto={this._goto} stageTitles={stageTitles} />
          {/*<h1>{this.props.titulo} - {this.props.tipoFormulario}</h1>*/}
          <form onSubmit={this.handleSubmit}>
            { newWork }
            { stages }
            <ProgressBar />
						<Container>
							<Row>
								<Col md={6} className="text-left">
								{ this.botonAnterior() }
								</Col>
								<Col md={6} className="text-right">
								{ sendButton }
								{ this.botonSiguiente() }
								</Col>
							</Row>
						</Container>
          </form>
				</Container>
      </React.Fragment>
    );
  }

}

export default MasterForm;