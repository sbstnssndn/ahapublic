import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends Component {

  handlePageChange = this.handlePageChange.bind(this);

  handlePageChange() {
    window.location = "http://localhost:3000/postulantes/panel"
  }

  render() {
    return (
      <React.Fragment>
      <Container>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
          <Card.Body>
            <Card.Title>Iniciar Sesión</Card.Title>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="nombre@mail.cl" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="********" />
            </Form.Group>
            <Button variant="primary" onClick={this.handlePageChange}>
              Iniciar
            </Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
      </React.Fragment>
    )
  }
};

export default Login;