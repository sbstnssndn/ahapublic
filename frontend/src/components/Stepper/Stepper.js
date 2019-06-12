import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
//import { LinkContainer } from 'react-router-bootstrap';

const Stepper = (props) => {

	let total = props.totalStages;
	let items = [];
	
	for (let number = 1; number <= total; number++) {
		items.push(
			<OverlayTrigger
				key={number}
				placement="bottom"
				overlay={
					<Tooltip id={`tooltip-bottom`}>
						<strong>{props.stageTitles[number-1]}</strong>
					</Tooltip>
				}
			>
				<Pagination.Item active={number === props.currentStage+1} onClick={() => props.goto(number-1)}>
					{number}
				</Pagination.Item>
			</OverlayTrigger>,
		);
	}

  return (
		<Container fluid>
			<Row className="justify-content-center">
				<Pagination className="mb-2 mt-2">
					{items}
				</Pagination>
			</Row>
		</Container>
  );
}

export default Stepper;