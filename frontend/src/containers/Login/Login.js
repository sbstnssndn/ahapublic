import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { login } from '../../util/APIUtils';
import { ACCESS_TOKEN } from '../../constants';
import { emailIsValid, passwordLengthIsValid } from '../../util/ValidationUtils';

class Login extends Component {

	state = {
		email: '',
		password: '',
		mailAlert: '',
		passAlert: '',
		allowed: 'disabled',
	}

	handleBlur = (event) => {
      const id = event.target.id
      const value = event.target.value

      switch (id) {
				case('email'):
					if (value === '' || !emailIsValid(value)) {
						this.setState({
							mailAlert: 'Correo electrónico inválido.',
							allowed: 'disabled'
						});
					} else {
						this.setState({
							mailAlert: '',
							allowed: 'enabled'
						});
					}
          break;
        case('password'):
          if (value === '' || !passwordLengthIsValid(value)) {
						this.setState({
            	passAlert: 'La contraseña debe tener entre 6 y 30 caracteres.',
            	allowed: 'disabled'
            });
					} else {
						this.setState({
            	passAlert: '',
            	allowed: 'enabled'
            });
					}
					break;
				default:
					break;
      }
    }

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const loginRequest = Object.assign({}, this.state);

		login(loginRequest)
			.then(response => {
				localStorage.setItem(ACCESS_TOKEN, response.accessToken);
				this.props.onLogin();
			}).catch(error => {
				if(error.status === 401) {
					console.log('Usuario o contraseña incorrectos.');
				} else {
					console.log('Algo salió mal, intenta nuevamente.');                                         
				}
			});
	}

	render () {

		return (
			<React.Fragment>
				<p>{this.props.prueba}</p>
				<section id="formularios" className="py-4" style={{minHeight: '90vh'}}>
					<Container style={{paddingTop: '100px'}}>
						<Row>
							<Col md>
								<Row>
									<Col md={{ span: 6, offset: 3 }}>
										<Card>
											<Card.Body>
												<Card.Title>Iniciar Sesión</Card.Title>
												<Form onSubmit={this.handleSubmit}>
													<Form.Group controlId="email">
														<Form.Label>Correo electrónico</Form.Label>
														<Form.Control
															type="email"
															placeholder="nombre@mail.cl"
															value={this.state.email}
															onBlur={this.handleBlur}
															onChange={this.handleChange} />
														<Form.Text className="text-danger">
															{this.state.mailAlert}
														</Form.Text>
													</Form.Group>
													<Form.Group controlId="password">
														<Form.Label>Contraseña</Form.Label>
														<Form.Control
															type="password"
															placeholder="Ingrese su contraseña..."
															value={this.state.password}
															onBlur={this.handleBlur}
															onChange={this.handleChange} />
														<Form.Text className="text-danger">
															{this.state.passAlert}
														</Form.Text>
													</Form.Group>
													<Button variant="primary" type="submit">
														Iniciar sesión
													</Button>
												</Form>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</section>
			</React.Fragment>
		);
	}
}

export default Login;