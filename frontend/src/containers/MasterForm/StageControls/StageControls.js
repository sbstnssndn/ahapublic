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
				Guardar
			</Button>
		)
	}

  return (
		<Container fluid>
			<Row>
				<Col xs={4} className="text-left px-0">
				{ prevButton }
				</Col>
				<Col xs={4} className="text-center px-0">
				{ sendButton }
				</Col>
				<Col xs={4} className="text-right px-0">
				{ nextButton }
				</Col>
			</Row>
		</Container>
  );
}

export default StageControls;