import React from 'react';
import { 
	Route
} from "react-router-dom";
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
	let tabs = null;

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
			tabs = (
				<Tabs routes={routes}>
					<React.Fragment label="Datos personales" to={`${props.match.url}`} icon="fas fa-address-card" />
					<React.Fragment label="Datos laborales" to={`${props.match.url}/perfil-laboral`} icon="fas fa-briefcase" />
					<React.Fragment label="Mi cuenta" to={`${props.match.url}/cuenta`} icon="fas fa-user" />
				</Tabs>
			);
			break;
		case USER_TYPE_EMPRESA:
				routes = (
					<>
						<Route
							path={`${props.match.path}/ofertas`}
							exact
							render={(props) => (
								<MasterForm
									formConfig={formPostulanteLaboral} currentUser={props.currentUser} {...props} />
							)} />
						<Route
							path={`${props.match.path}/recomendaciones`}
							exact
							render={(props) => (
								<MasterForm
									formConfig={formCuentaUsuario} currentUser={props.currentUser} {...props} />
							)} />
						<Route
							path={`${props.match.path}/accesibilidad`}
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
				tabs = (
					<Tabs routes={routes}>
						<React.Fragment label="Datos empresa" to={`${props.match.url}`} icon="fas fa-address-card" />
						<React.Fragment label="Ofertas laborales" to={`${props.match.url}/ofertas`} icon="fas fa-briefcase" />
						<React.Fragment label="Recomendaciones" to={`${props.match.url}/recomendaciones`} icon="fas fa-user" />
						<React.Fragment label="Mi cuenta" to={`${props.match.url}/cuenta`} icon="fas fa-user" />
					</Tabs>
				);
				break;
		default:
			routes = <p>Error al cargar contenido.</p>;
	}

	return (
		<section id="formularios" className="py-4" style={{minHeight: '80vh'}}>
			{ tabs }
		</section>
	)
}

export default Panel;