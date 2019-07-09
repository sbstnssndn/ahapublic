import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import Tooltip from 'react-bootstrap/Tooltip';
//import { LinkContainer } from 'react-router-bootstrap';

const Stepper = (props) => {

	let total = props.totalStages;
	let items = [];
	
	for (let number = 1; number <= total; number++) {
		// TODO: cambiar tooltip por alguna otra forma de visualización
		// React-bootstrap tiene un bug en versiones móviles: no desaparece el tooltip.
		items.push(
			/*
			<OverlayTrigger
				key={number}
				placement="bottom"
				overlay={
					<Tooltip id={`tooltip-bottom`}>
						{props.stageTitles[number-1]}
					</Tooltip>
				}
			>*/
				<Pagination.Item
					key={number}
					active={number === props.currentStage+1}
					onClick={() => props.goto(number-1)}
				>
					{number}
				</Pagination.Item>
			/*</OverlayTrigger>*/
		);
	}

  return (
		<Container fluid>
			<Row>
				<Col xs className="px-0">
					<Container fluid>
						<Row className="justify-content-center">
							<Pagination className="my-0">
								{items}				
							</Pagination>
						</Row>
						<Row className="justify-content-md-center">
							<p className="mb-0 pt-2">
								{props.stageTitles[props.currentStage]}
							</p>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
  );
}

export default Stepper;