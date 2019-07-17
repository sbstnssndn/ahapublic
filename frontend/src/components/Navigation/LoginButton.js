import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../../containers/Login/Login';

class LoginButton extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
      };
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
              <Modal.Title>¿Ya tienes una cuenta?</Modal.Title>
            </Modal.Header>


            <Modal.Body className="px-0">
							<Login onLogin={this.props.onLogin} />
            </Modal.Body>


            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }


  export default LoginButton;