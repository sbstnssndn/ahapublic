import React, { Component } from 'react';
import Stage from './Stage/Stage';
import axios from 'axios';
import Stepper from './Stepper/Stepper';
import StageControls from './StageControls/StageControls';
import Card from 'react-bootstrap/Card';


class MasterForm extends Component {
  
  state = {
		currentStage: 0,
		formData: ''
	}

	// handleChange(event, firstName)
  handleChange = (event, inputIdentifier) => {
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
		const updatedFormElement = {
			...updatedStageFields[inputIdentifier]
		}
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
		updatedFormElement.value = event.target.value;
		// guardar en el clon del form original, el nuevo elemento del formulario
		updatedForm.stages[this.state.currentStage].fields[inputIdentifier] = updatedFormElement;
		
    this.setState({
      form: updatedForm
    });
	}

	componentDidMount() {
		console.log(this.props)
	}

  handleSubmit = (event) => {
    event.preventDefault();
    
		// extraer los datos de cada form, dentro de cada etapa
		let payload = Object.create(null);
    for (let index in this.props.formConfig.stages) {
      for (let formElementIdentifier in this.props.formConfig.stages[index].fields) {
				// poblar objeto con todos los datos del formulario
				payload[formElementIdentifier] = this.props.formConfig.stages[index].fields[formElementIdentifier].value;
      }
		}
		console.log(payload)
		//window.location.href = "http://localhost:3000/";
		/*
		let method = 'HOLA';
		switch( method.toLowerCase() ) {
			case 'get':
				axios.get(this.props.formConfig.endpoint)
					.then(response => {
						console.log(response);
						this.setState({postulante: response.data});
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
				break;
		}*/
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
	
	onChange = (event) => {
		this.setState({
			stages: 'onChange triggered'
		})
	}
  
  render () {

		let stages = (
			this.props.formConfig.stages.map(stage => (
				<Stage
					key={stage.id}
					title={stage.name}
					id={stage.id}
					// stageFields = { apellidos: {elementConfig: {}, elementType: '', ...}, nombres: {}, ... }
					stageFields={stage.fields}
					currentStage={this.state.currentStage}
					totalStages={this.props.formConfig.totalStages}
					handleChange={this.handleChange}
				/>
			))
		);

		let stageTitlesArray = [];
		for (let stage in this.props.formConfig.stages) {
			stageTitlesArray.push(this.props.formConfig.stages[stage].name);
		}

    return (
			<Card>
				<Card.Header as="h5">{this.props.formConfig.category}</Card.Header>
				<Card.Body>
					<Stepper
						currentStage={this.state.currentStage}
						totalStages={this.props.formConfig.totalStages}
						stageTitles={stageTitlesArray}
						goto={this._goto}
					/>
					<form onSubmit={this.handleSubmit}>
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