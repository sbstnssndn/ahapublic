import React from 'react';
import { 
	Route,
	Link,
	Switch,
	withRouter
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Landing from '../Landing/Landing';
import Tabs from '../Tabs/Tabs';
import { formPostulante } from '../../formularios/formPostulante';
import { formPostulanteLaboral } from '../../formularios/formPostulanteLaboral';
import { formEmpresa } from '../../formularios/formEmpresa';
import { formCuentaUsuario } from '../../formularios/formCuentaUsuario';
import { formPreguntas } from '../../formularios/formPreguntas';
import MasterForm from '../../containers/MasterForm/MasterForm';
import { USER_TYPE_POSTULANTE, USER_TYPE_EMPRESA } from '../../constants';

const Panel = ( props ) => {

	let routes = null;

	console.log("match:")
	console.log(props.match)

	switch (props.currentUser.role) {
		case USER_TYPE_POSTULANTE:
			routes = (
				<>
					<Route
						path={`${props.match.path}/perfil-laboral`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formPostulanteLaboral} currentUser={props.currentUser} {...props} />
						)} />
					<Route
						path={`${props.match.path}/cuenta`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formCuentaUsuario} currentUser={props.currentUser} {...props} />
						)} />
					<Route
						path={`${props.match.path}/preguntas`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formPreguntas} currentUser={props.currentUser} {...props} />
						)} />
					<Route
						path={`${props.match.path}`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formPostulante} currentUser={props.currentUser} {...props} />
						)} />
				</>
			);
			break;
		case USER_TYPE_EMPRESA:
				routes = (
					<>
						<Route
							path={`${props.match.path}/perfil-laboral`}
							exact
							render={(props) => (
								<MasterForm
									formConfig={formPostulanteLaboral} currentUser={props.currentUser} {...props} />
							)} />
						<Route
							path={`${props.match.path}/cuenta`}
							exact
							render={(props) => (
								<MasterForm
									formConfig={formCuentaUsuario} currentUser={props.currentUser} {...props} />
							)} />
						<Route
							path={`${props.match.path}/preguntas`}
							exact
							render={(props) => (
								<MasterForm
									formConfig={formPreguntas} currentUser={props.currentUser} {...props} />
							)} />
						<Route
							path={`${props.match.path}`}
							render={(props) => (
								<MasterForm
									formConfig={formEmpresa} currentUser={props.currentUser} {...props} />
							)} />
					</>
				);
				break;
		default:
			routes = <p>Rutas</p>;
	}

	return (
		<React.Fragment>
			<section id="formularios" className="py-4" style={{minHeight: '80vh'}}>
				<Container>
					<Row>
						<Col md={9} className="">

							<Switch>
								{ routes }
							</Switch>

						</Col>
						<Col md={3}>

							<Tabs match={props.match} />

						</Col>
					</Row>
				</Container>
			</section>
		</React.Fragment>
	)
}

export default Panel;