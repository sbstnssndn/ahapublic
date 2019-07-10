import React from 'react';
import { 
	Route
} from "react-router-dom";

import MasterForm from '../../containers/MasterForm/MasterForm';
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import Perfiles from '../Perfiles/Perfiles.js';
import ListarOfertas from '../ListarOfertas/ListarOfertas';
import Ofertas from '../Ofertas/Ofertas';
import DetalleOferta from '../Ofertas/DetalleOferta';
import Empresa from '../Empresa/Empresa';
import Tabs from '../Tabs/Tabs';
import { formPostulante } from '../../constants/forms/formPostulante';
import { formPostulanteLaboral } from '../../constants/forms/formPostulanteLaboral';
import { formEmpresa } from '../../constants/forms/formEmpresa';
import { formNuevaOferta} from '../../constants/forms/formNuevaOferta';
import { formCuentaUsuario } from '../../constants/forms/formCuentaUsuario';
import {
	USER_TYPE_POSTULANTE,
	USER_TYPE_EMPRESA,
	USER_TYPE_AHA
} from '../../constants';

const Panel = ( props ) => {

	let routes = null;
	let tabs = null;

	let currentUser = {...props.currentUser};

	switch (currentUser.role) {
		case USER_TYPE_POSTULANTE:
			routes = (
				<>
					<Route
						path={`${props.match.path}/perfil-laboral`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formPostulanteLaboral} currentUser={currentUser} {...props} />
						)} />
					<Route
						path={`${props.match.path}/cuenta`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formCuentaUsuario} currentUser={currentUser} {...props} />
						)} />
					<Route
						path={`${props.match.path}`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formPostulante} currentUser={currentUser} {...props} />
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
					{/* Por implementar
					<Route
						path={`${props.match.path}/ofertas`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formPostulanteLaboral} currentUser={props.currentUser} {...props} />
						)} /> */}
						
					<Route
						path={`${props.match.path}/recomendaciones`}
						exact
						render={(props) => (
							<Recomendaciones />
						)} />
						
					<Route
						path={`${props.match.path}/nueva-oferta`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formNuevaOferta} currentUser={currentUser} {...props} />	
						)} />
						
					{/* /empresa */}
					<Route
						path={`${props.match.path}`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formEmpresa} currentUser={currentUser} {...props} />
						)} />
				</>
			);
			tabs = (
				<Tabs routes={routes}>
					<div label="Datos empresa" to={`${props.match.url}`} icon="fas fa-address-card"></div>
					{/*<div label="Ofertas laborales" to={`${props.match.url}/ofertas`} icon="fas fa-briefcase"></div>*/}
					<div label="Recomendados" to={`${props.match.url}/recomendaciones`} icon="fas fa-user"></div>
					<div label="Nueva oferta" to={`${props.match.url}/nueva-oferta`} icon="fas fa-user"></div>
				</Tabs>
			);
			break;
		case USER_TYPE_AHA:

			routes = (
				<>
					<Route
						path={`${props.match.path}`}
						exact
						render={(props) => (							
							<Perfiles typeUsers="candidato" title="Postulantes"/>
						)} />
					
					<Route
						path={`${props.match.path}/empresas`}
						exact
						render={(props) => (
							<Perfiles typeUsers="empresa" title="Empresas"/>
						)} />

					<Route
						path={`${props.match.path}/cuenta`}
						exact
						render={(props) => (
							<MasterForm
								formConfig={formCuentaUsuario} currentUser={currentUser} {...props} />
						)} />

					{/*Ofertas de una empresa */}
					<Route
						path={`${props.match.path}/empresas/:id/ofertas`}
						exact
						render={(props) => (
							<ListarOfertas {...props}/>
						)} />

					{/*Todas las ofertas */}
					<Route
						path={`${props.match.path}/ofertas`}
						exact
						render={(props) => (
							<Ofertas {...props}/>
						)} />

					{/*Ver una empresa */}
					<Route
						path={`${props.match.path}/empresas/:id`}
						exact
						render={(props) => (
							<Empresa {...props}/>
						)} />

					{/*Detalle de oferta */}
					<Route
						path={`${props.match.path}/oferta/:id/detalle`}
						exact
						render={(props) => (
							<DetalleOferta {...props}/>
						)} />

					{/*Recomendaciones de oferta */}
					<Route
						path={`${props.match.path}/oferta/:id/recomendaciones`}
						exact
						render={(props) => (
							<Recomendaciones {...props}/>
						)} />
					
				</>
			);
			tabs = (
				<Tabs routes={routes}>
					<div label="Postulantes" to={`${props.match.url}`} icon="fas fa-user"></div>
					<div label="Empresas" to={`${props.match.url}/empresas`} icon="fas fa-user"></div>
					<div label="Ofertas" to={`${props.match.url}/ofertas`} icon="fas fa-address-card"></div>					
					<div label="Mi cuenta" to={`${props.match.url}/cuenta`} icon="fas fa-user"></div>
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