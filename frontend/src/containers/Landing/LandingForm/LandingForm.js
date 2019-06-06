import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class LandingForm extends Component {

	render () {
		return (
			<Card bg="primary" className="text-center card-form">
				<Card.Body>
					<h3>Regístrate</h3>
					<p>Llena el formulario</p>

					<form>
						<div className="form-group">
							<input type="email" className="form-control form-control-lg" placeholder="Correo" />
						</div>
						<div className="form-group">
							<input type="password" className="form-control form-control-lg" placeholder="Contraseña" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control form-control-lg" placeholder="Nombres" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control form-control-lg" placeholder="Apellidos" />
						</div>
						
						<input type="submit" value="Enviar" className="btn btn-outline-light btn-block" />
					</form>

				</Card.Body>
			</Card>
		);
	}

}

export default LandingForm;