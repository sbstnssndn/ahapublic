import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Login extends Component {

  state = {
    mail: '',
    pass: '',
    isLoggedIn: false,
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault;


  }

  render () {
    return (
      <Container>
        <Row>
          <Col md="auto">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="mail"
                  type="email"
                  placeholder="Ingrese su correo"
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  name="pass"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  onChange={this.handleChange} />
              </Form.Group>
              <Button type="submit">Ingresar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      )
    } 
}

export default Login;