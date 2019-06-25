import React from 'react';
import { 
	Route
} from "react-router-dom";

import MasterForm from '../../containers/MasterForm/MasterForm';
import Tabs from '../Tabs/Tabs';
import { formPostulante } from '../../constants/forms/formPostulante';
import { formPostulanteLaboral } from '../../constants/forms/formPostulanteLaboral';
import { formEmpresa } from '../../constants/forms/formEmpresa';
import { formEmpresaLaboral} from '../../constants/forms/formEmpresaLaboral';
import { formCuentaUsuario } from '../../constants/forms/formCuentaUsuario';
import {
	USER_TYPE_POSTULANTE,
	USER_TYPE_EMPRESA
} from '../../constants';

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
					<div label="Datos personales" to={`${props.match.url}`} icon="fas fa-address-card"></div>
					<div label="Datos laborales" to={`${props.match.url}/perfil-laboral`} icon="fas fa-briefcase"></div>
					<div label="Mi cuenta" to={`${props.match.url}/cuenta`} icon="fas fa-user"></div>
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
							path={`${props.match.path}/nueva-oferta`}
							exact
							render={(props) => (
								<MasterForm
									formConfig={formEmpresaLaboral} currentUser={props.currentUser} {...props} />	
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
						<div label="Datos empresa" to={`${props.match.url}`} icon="fas fa-address-card"></div>
						<div label="Ofertas laborales" to={`${props.match.url}/ofertas`} icon="fas fa-briefcase"></div>
						<div label="Recomendaciones" to={`${props.match.url}/recomendaciones`} icon="fas fa-user"></div>
						<div label="Nueva oferta" to={`${props.match.url}/nueva-oferta`} icon="fas fa-user"></div>
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