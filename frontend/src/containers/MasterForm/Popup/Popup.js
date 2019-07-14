import React from 'react';
import Toast from 'react-bootstrap/Toast';
//import Tooltip from 'react-bootstrap/Tooltip';
//import { LinkContainer } from 'react-router-bootstrap';

const Popup = (props) => {

    const show = props.show;
    const message = props.message;
    const handleClose = props.handleClose;

  return (
    <Toast onClose={handleClose} show={show} delay={3000} autohide>
        <Toast.Header>
            <strong className="mr-auto">Aviso</strong>
        </Toast.Header>
        <Toast.Body>
            {message}
        </Toast.Body>
    </Toast>
  );
}

export default Popup;