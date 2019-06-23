import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
//import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import regexMail from '../../constants/regexMail';

class LoginButton extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
      };
    }

    handleBlur = (event) => {
      const id = event.target.id
      const value = event.target.value

      switch(value){
        case('formBasicEmail'):
          const result = regexMail.test(String(value).toLowerCase())
          console.log(result)
          break;
        case('formBasicPassword'):
          break;
      }
    }
  
    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
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
								<Form.Group controlId="formBasicEmail" onBlur={this.handleBlur}>
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
                Cerrar
              </Button>
            <LinkContainer to="/postulantes/panel">
                <Nav.Link>
                    <Button variant="primary" type="submit" onClick={this.handleClose}>
                                Iniciar Sesión
                    </Button>
                </Nav.Link>
            </LinkContainer>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }


  export default LoginButton;