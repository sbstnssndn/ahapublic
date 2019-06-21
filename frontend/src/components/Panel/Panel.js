import React from 'react';
import { 
	Route,
	Link
} from "react-router-dom";
import Formulario from '../Formulario/Formulario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Panel = ( props ) => {
	return (
		<React.Fragment>
			<section id="formularios" className="py-4" style={{minHeight: '80vh'}}>
				<Container>
					<Row>
						<Col md={9} className="">
							<Link to={`${props.match.url}/cuenta`}>Formulario</Link>

							<Route path={`${props.match.path}/cuenta`} component={Formulario}></Route>
						</Col>
						<Col md={3}>
							Cards
						</Col>
					</Row>
				</Container>
			</section>
		</React.Fragment>
	)
}

export default Panel;