import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LandingForm extends Component {

	render () {
		return (
			<Card bg="primary" className="text-center card-form">
				<Card.Body>
					<h3>Postulantes</h3>
					<p>¿Buscas trabajo? ¡Regístrate!</p>

					<Form>
						<Form.Group controlId="formEmail">
    					<Form.Control type="email" placeholder="Correo electrónico" />
						</Form.Group>
						<Form.Group controlId="formPassword">
    					<Form.Control type="password" placeholder="Contraseña" />
						</Form.Group>
						<Form.Group controlId="formNombres">
    					<Form.Control type="text" placeholder="Nombres" />
						</Form.Group>
						<Form.Group controlId="formApellidos">
    					<Form.Control type="text" placeholder="Apellidos" />
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