import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import Tooltip from 'react-bootstrap/Tooltip';
//import { LinkContainer } from 'react-router-bootstrap';

const StageControls = (props) => {

	const totalStages = props.totalStages;
	const firstStage = 0;
	const lastStage = totalStages - 1;

	let currentStage = props.currentStage;
		
	let prevButton = null;
	if (currentStage !== firstStage) {
		prevButton = (
			<Button variant="secondary" onClick={props._prev}>
				Anterior
			</Button>
		);
	}

	let nextButton = null;
	if (currentStage < lastStage) {
		nextButton = (
		<Button variant="primary" onClick={props._next}> 
			Siguiente
		</Button>        
		);
	}

	// TODO: implementar touched, togglear si el usuario ingresa algo a algún campo
	let touched = true;
	let sendButton = null;
	if (touched) {
		sendButton = (
			<Button variant="success" type="submit">
				Guardar datos
			</Button>
		)
	}

  return (
		<Container fluid>
			<Row>
				<Col md={4} className="text-left">
				{ prevButton }
				</Col>
				<Col md={4} className="text-center">
				{ sendButton }
				</Col>
				<Col md={4} className="text-right">
				{ nextButton }
				</Col>
			</Row>
		</Container>
  );
}

export default StageControls;