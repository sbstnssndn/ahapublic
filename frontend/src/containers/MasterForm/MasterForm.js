import React, { Component } from 'react';
import Stage from './Stage/Stage';

import axios from 'axios';

import Stepper from './Stepper/Stepper';
import StageControls from './StageControls/StageControls';
import Card from 'react-bootstrap/Card';


class MasterForm extends Component {
  
  state = {
		currentStage: 0,
		form: {
			category: "Datos personales",
			belongsTo: "postulante",
			endpoint: "http://localhost:8080/api/postulante/:id/datos-personales",
			totalStages: 2,
			stages: [
				{
					id: 0,
					name: "Identificación",
					fields: {
						rut: {
							label: 'RUT',
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: '12345678-0',
								name: 'rut',
								id: 'rut'
							},
							value: ''
						},
						firstName: {
							label: 'Nombres',
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Juan Alberto',
								name: 'firstName',
								id: 'firstName'
							},
							value: ''
						},
						lastName: {
							label: 'Apellidos',
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Pérez Soto',
								name: 'lastName',
								id: 'lastName'
							},
							value: ''
						},
						location: {
							label: 'Dirección',
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Av. Pajaritos 754, casa 64',
								name: 'location',
								id: 'location'
							},
							value: ''
						}
					}
				},
				{
					id: 1,
					name: "Ubicación",
					fields: {
						rut: {
							label: 'RUT',
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: '12345678-0',
								name: 'rut',
								id: 'rut'
							},
							value: ''
						},
						firstName: {
							label: 'Nombres',
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Juan Alberto',
								name: 'firstName',
								id: 'firstName'
							},
							value: ''
						},
						lastName: {
							label: 'Apellidos',
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Pérez Soto',
								name: 'lastName',
								id: 'lastName'
							},
							value: ''
						},
						location: {
							label: 'Dirección',
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Av. Pajaritos 754, casa 64',
								name: 'location',
								id: 'location'
							},
							value: ''
						}
					}
				}  
			]
		}
	}

	// handleChange(event, firstName)
  handleChange = (event, inputIdentifier) => {
	 	const updatedForm = {
			...this.state.form
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
	
	handleSubmitForm = (event) => {
		event.preventDefault();

		const formData = [];
    for (let index in this.state.stages) {
      // para cada etapa, extraer los ids y values de los campos
      for (let formElementIdentifier in this.state.stages[index].inputs) {
        formData[formElementIdentifier] = this.state.stages[index].inputs[formElementIdentifier].value;
      }
    }
		let method = 'HOLA';
		switch( method.toLowerCase() ) {
			case 'get':
				axios.get(this.state.stages.endpoint)
					.then(response => {
						console.log(response);
						this.setState({postulante: response.data});
					})
					.catch(function(error){
						console.log(error);
					})
				break;
			case 'post':
				axios.post(this.state.stages.endpoint, formData)
					.then(response => {
						console.log(response);
					})
					.catch(function(error){
						console.log(error);
					})
				break;
		}
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
    //window.location.href = "http://localhost:3000/";
  }

  componentDidMount() {

	}
	
	_goto = (stage) => {
    this.setState({
      currentStage: stage
    });
  }

  _next = () => {
    let currentStage = this.state.currentStage;
    let lastStage = this.state.form.totalStages - 1;

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
			this.state.form.stages.map(stage => (
				<Stage
					key={stage.id}
					title={stage.name}
					id={stage.id}
					// stageFields = { apellidos: {elementConfig: {}, elementType: '', ...}, nombres: {}, ... }
					stageFields={stage.fields}
					currentStage={this.state.currentStage}
					totalStages={this.state.form.totalStages}
					handleChange={this.handleChange}
				/>
			))
		);

		let stageTitlesArray = [];
		for (let stage in this.state.form.stages) {
			stageTitlesArray.push(this.state.form.stages[stage].name);
		}

    return (
			<Card>
				<Card.Header as="h5">{this.state.form.category}</Card.Header>
				<Card.Body>
					<Stepper
						currentStage={this.state.currentStage}
						totalStages={this.state.form.totalStages}
						stageTitles={stageTitlesArray}
						goto={this._goto}
					/>
					<form onSubmit={this.handleSubmit}>
						{ stages }
						<StageControls
							totalStages={this.state.form.totalStages}
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