import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { signup } from '../../util/APIUtils';
import { 
  emailIsValid,
  passwordLengthIsValid,
   } from '../../util/ValidationUtils';
import { LinkContainer } from 'react-router-bootstrap';

class LandingForm extends Component {

  state = {
    empresa: false,
    email: '',
    password: '',
    confirmPassword: '',
    alert: { show: false, message: null },
    show: false
  }

  handleDismiss = () => {
    this.setState({
      alert: { show: false,
               message: null,
               }
    });
  }

  handleAlert = (msg) => {
    this.setState({
      alert: { show: true,
               message: msg,
               }
    });

    setTimeout(() => {
      this.handleDismiss()
    }, 5000)
  }

  validateForm = () => {
    return (
      emailIsValid(this.state.email) &&
      passwordLengthIsValid(this.state.password) &&
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
        this.handleAlert(error.message)
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
      <Card className="card-form">
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
            <Alert
              className="mb-0 mt-2"
              variant="secondary"
              show={this.state.alert.show}
              onClose={this.handleDismiss}
              dismissible>
              { this.state.alert.message }
            </Alert>

          </Form>
        </Card.Body>
      </Card>
    );
  }

}

export default LandingForm;