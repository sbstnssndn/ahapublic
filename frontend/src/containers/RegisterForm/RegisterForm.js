import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { signup } from '../../util/APIUtils';
import { LinkContainer } from 'react-router-bootstrap';

class LandingForm extends Component {

	state = {
		empresa: false,
		email: '',
		password: '',
		confirmPassword: '',
		errorMessage: null,
		show: false
	}

	handleDismiss = () => this.setState({ show: false });

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
	}

	handleCheckboxChange = (event) => {
		this.setState({
			empresa: event.target.checked
		});
	}
	
	handleSubmit = (event) => {
		event.preventDefault();

		let rol = "candidato";
		if (this.state.empresa)
			rol = "empresa"

		const signupRequest = {
			email: this.state.email,
			password: this.state.password,
			role: rol
		}

		signup(signupRequest)
			.then(response => {
				this.props.history.push("/login");
			}).catch(error => {
				console.log(error);
				this.setState({
					errorMessage: error.message,
					show: true
				})
		});
	}

	render () {

		let formHeader = (
			<React.Fragment>
				<h3 className="text-center">Postulantes</h3>
				<p className="text-center">¿Buscas trabajo? ¡Regístrate!</p>
			</React.Fragment>
		)

		if (this.state.empresa) {
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
						<LinkContainer to="/login">
							<Button variant="outline-light" block>
								Iniciar Sesión
							</Button>
						</LinkContainer>

						{/* TODO: Cambiar esto por un toast */}
						<Alert
							className="mb-0 mt-2"
							variant="secondary"
							show={this.state.show}
							onClose={this.handleDismiss}
							dismissible>
							{ this.state.errorMessage }
						</Alert>

					</Form>
				</Card.Body>
			</Card>
		);
	}

}

export default LandingForm;