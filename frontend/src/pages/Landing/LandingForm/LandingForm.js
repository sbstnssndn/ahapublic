import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const REGISTER_ENDPOINT = "http://localhost:8080/api/user/add";

class LandingForm extends Component {

	state = {
		empresa: false,
		email: '',
		password: '',
		confirmPassword: ''
	}

	validateForm = () => {
    return (
      this.state.email.length > 5 &&
      this.state.password.length > 5 &&
      this.state.password === this.state.confirmPassword
    );
  }

	handleInputChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
		console.log(this.state);
	}

	handleCheckboxChange = (event) => {
		this.setState({
			empresa: event.target.checked
		});
		console.log(this.state);
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		//window.location.href = "http://localhost:3000/";
		
		let rol = "candidato";
		if (this.state.empresa)
			rol = "empresa"

		const payload = {
			email: this.state.email,
			password: this.state.password,
			role: rol
		}
		
		axios.post(REGISTER_ENDPOINT, payload)
			.then(response => {
				console.log(response);
			})
			.catch(function(error){
				console.log(error);
			});
	}

	render () {

		let formHeader = (
			<React.Fragment>
				<h3 className="text-center">Postulantes</h3>
				<p className="text-center">¿Buscas trabajo? ¡Regístrate!</p>
			</React.Fragment>
		)

		if (this.state.checkboxChecked) {
			formHeader = (
				<React.Fragment>
					<h3 className="text-center">Empresas</h3>
					<p className="text-center">¿Ofreces trabajo? ¡Regístrate!</p>
				</React.Fragment>
			);
		}

		return (
			<Card bg="primary" className="card-form">
				<Card.Body>
					{ formHeader }
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="email">
    					<Form.Control
								type="email"
								placeholder="Correo electrónico"
								autoFocus
								value={this.state.email}
            		onChange={this.handleInputChange}
							/>
						</Form.Group>
						<Form.Group controlId="password">
    					<Form.Control
								type="password"
								placeholder="Contraseña"
								value={this.state.password}
            		onChange={this.handleInputChange}
							/>
						</Form.Group>
						<Form.Group controlId="confirmPassword">
    					<Form.Control
								type="password"
								placeholder="Confirmar contraseña"
								value={this.state.confirmPassword}
            		onChange={this.handleInputChange}
							/>
						</Form.Group>
						<Form.Group controlId="empresa">
							<Form.Check
								type="checkbox"
								label="Soy empresa"
								checked={this.state.empresa}
								onChange={this.handleCheckboxChange}
							/>
						</Form.Group>
						<Button variant="outline-light" type="submit" block disabled={!this.validateForm()}>
							Registrarse
						</Button>

					</Form>


				</Card.Body>
			</Card>
		);
	}

}

export default LandingForm;