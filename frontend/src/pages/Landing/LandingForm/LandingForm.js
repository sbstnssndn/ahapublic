import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LandingForm extends Component {

	state = {
		checkboxChecked: false
	}


	handleChange = (evt) => {
		this.setState({ checkboxChecked: evt.target.checked });
		console.log('checkbox: '+ evt.target.checked);
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
					<Form>
						<Form.Group controlId="formEmail">
    					<Form.Control type="email" placeholder="Correo electrónico" />
						</Form.Group>
						<Form.Group controlId="formPassword">
    					<Form.Control type="password" placeholder="Contraseña" />
						</Form.Group>
						<Form.Group controlId="formEmpresa">
							<Form.Check type="checkbox" label="Soy empresa" onChange={this.handleChange} />
						</Form.Group>
						<Button variant="outline-light" type="submit" block>
							Registrarse
						</Button>

					</Form>


				</Card.Body>
			</Card>
		);
	}

}

export default LandingForm;