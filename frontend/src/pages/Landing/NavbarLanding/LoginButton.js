import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';




class LoginButton extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Iniciar Sesión
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Ingresa a tu cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Correo" />
                        <Form.Text className="text-muted">
                        Nunca compartiremos tu correo con nadie.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                </Form>     
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={this.handleClose}>
                        Iniciar Sesión
            </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }


  export default LoginButton;