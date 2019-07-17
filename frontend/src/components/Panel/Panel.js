import React from 'react';
import { 
	Route
} from "react-router-dom";

import MasterForm from '../../containers/MasterForm/MasterForm';
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import Perfiles from '../Perfiles/Perfiles.js';
import MisOfertas from '../Ofertas/MisOfertas.js';
import ListarOfertas from '../ListarOfertas/ListarOfertas';
import Ofertas from '../Ofertas/Ofertas';
import DetalleOferta from '../Ofertas/DetalleOferta';
import Empresa from '../Empresa/Empresa';
import Tabs from '../Tabs/Tabs';

import {
	USER_TYPE_POSTULANTE,
	USER_TYPE_EMPRESA,
	USER_TYPE_AHA,
	FORM_POSTULANTE_LABORAL,
	FORM_CUENTA_USUARIO,
	FORM_POSTULANTE,
	FORM_NUEVA_OFERTA,
	FORM_EMPRESA,
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
								formTitle={FORM_POSTULANTE_LABORAL} currentUser={currentUser} {...props} />
					)} />
					<Route
						path={`${props.match.path}/cuenta`}
						exact
						render={(props) => (
							<MasterForm
							formTitle={FORM_CUENTA_USUARIO} currentUser={currentUser} {...props} />
					)} />
					<Route
						path={`${props.match.path}`}
						exact
						render={(props) => (
							<MasterForm
							formTitle={FORM_POSTULANTE} currentUser={currentUser} {...props} />
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
					{/* Ofertas propias */}
					<Route
						path={`${props.match.path}/ofertas`}
						exact
						render={(props) => (
							<MisOfertas currentUser={currentUser} {...props}/>
						)} />

					{/* Detalle de oferta */}
					<Route
						path={`${props.match.path}/oferta/:id/detalle`}
						exact
						render={(props) => (
							<DetalleOferta currentUser={currentUser} {...props}/>
						)} />
						
					<Route
						path={`${props.match.path}/nueva-oferta`}
						exact
						render={(props) => (
							<MasterForm
								formTitle={FORM_NUEVA_OFERTA} currentUser={currentUser} {...props} />	
						)} />
						
					{/* /empresa */}
					<Route
						path={`${props.match.path}`}
						exact
						render={(props) => (
							<MasterForm
								formTitle={FORM_EMPRESA} currentUser={currentUser} {...props} />
						)} />
				</>
			);
			tabs = (
				<Tabs routes={routes}>
					<div label="Datos empresa" to={`${props.match.url}`} icon="fas fa-address-card"></div>
					{/*<div label="Ofertas laborales" to={`${props.match.url}/ofertas`} icon="fas fa-briefcase"></div>*/}
					<div label="Mis ofertas" to={`${props.match.url}/ofertas`} icon="fas fa-building"></div>
					<div label="Nueva oferta" to={`${props.match.url}/nueva-oferta`} icon="fas fa-briefcase"></div>
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
								formTitle={FORM_CUENTA_USUARIO} currentUser={currentUser} {...props} />
						)} />

					{/*Editar un postulante */}
					<Route
						path={`${props.match.path}/postulante/:id`}
						exact
						render={(props) => (
							<MasterForm
								formTitle={FORM_POSTULANTE} currentUser={currentUser} {...props} />
						)} />
					<Route
						path={`${props.match.path}/postulante/:id/perfil-laboral`}
						exact
						render={(props) => (
							<MasterForm
								formTitle={FORM_POSTULANTE_LABORAL} currentUser={currentUser} {...props} />
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
							<DetalleOferta currentUser={currentUser} {...props}/>
						)} />

					{/*Recomendaciones de oferta */}
					<Route
						path={`${props.match.path}/oferta/:id/recomendaciones`}
						exact
						render={(props) => (
							<Recomendaciones currentUser={currentUser} {...props}/>
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