import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Footer from '../../components/Footer/Footer';

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { login } from '../../util/APIUtils';
import { ACCESS_TOKEN } from '../../constants'

class Login extends Component {

	state = {
		email: '',
		password: ''
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const loginRequest = Object.assign({}, this.state);
		//console.log(loginRequest);

		login(loginRequest)
			.then(response => {
				console.log("response en Login.js:");
				console.log(response);
				localStorage.setItem(ACCESS_TOKEN, response.accessToken);
				this.props.onLogin();
			}).catch(error => {
				if(error.status === 401) {
					console.log('Your Username or Password is incorrect. Please try again!');
				} else {
					console.log('Sorry! Something went wrong. Please try again!');                                         
				}
			});

	}
	

	handlePageChange = this.handlePageChange.bind(this);

  handlePageChange() {
    window.location = "http://localhost:3000/postulantes/panel"
  }

	render () {

		return (
			<React.Fragment>
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
															onChange={this.handleChange} />
													</Form.Group>
													<Form.Group controlId="password">
														<Form.Label>Contraseña</Form.Label>
														<Form.Control
															type="password"
															placeholder="Ingrese su contraseña..."
															value={this.state.password}
															onChange={this.handleChange} />
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