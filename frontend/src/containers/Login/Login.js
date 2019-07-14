import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { login } from '../../util/APIUtils';
import { ACCESS_TOKEN } from '../../constants';
import { emailIsValid, passwordLengthIsValid } from '../../util/ValidationUtils';

class Login extends Component {

  state = {
    email: '',
    password: '',
    mailAlert: '',
    passAlert: '',
    alert: { show: false, message: null, type: null },
    allowed: 'disabled',
  }

  handleDismiss = () => {
    this.setState({
      alert: { show: false,
               message: null,
               type: null,
               }
    });
  }

  handleAlert = (msg, type) => {
    this.setState({
      alert: { show: true,
               message: msg,
               type: type,
               }
    });

    setTimeout(() => {
      this.handleDismiss()
    }, 5000)
  }

  handleBlur = (event) => {
      const id = event.target.id
      const value = event.target.value

      switch (id) {
        case('email'):
          if (!emailIsValid(value)) {
            this.setState({ mailAlert: 'Correo electrónico inválido.'});
          } else {
            this.setState({ mailAlert: ''});
          }
          break;
        case('password'):
            if (!passwordLengthIsValid(value)) {
            this.setState({ passAlert: 'La contraseña debe tener entre 6 y 30 caracteres.' });
            } else {
              this.setState({ passAlert: ''});
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

    const stateCopy = { ...this.state }
    const loginRequest = { email: stateCopy.email, password: stateCopy.password };
    console.log("Ingresando");
    login(loginRequest)
      .then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        this.props.onLogin();
      }).catch(error => {
        if(error.status === 401) {
          console.log('Usuario o contraseña incorrectos.');
          this.handleAlert('Usuario o contraseña incorrectos.', 'danger');
        } else {
          console.log('Algo salió mal, intenta nuevamente.');
          this.handleAlert('Algo salió mal, intenta nuevamente.', 'warning');
        }
      });
  }

  render () {

    return (
      <React.Fragment>
        <Container fluid>
          <Alert
            className="mb-0 mt-2"
            variant={this.state.alert.type}
            show={this.state.alert.show}
            onClose={this.handleDismiss}
            dismissible>
            {this.state.alert.message}
          </Alert>
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
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;