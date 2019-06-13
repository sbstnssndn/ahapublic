import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Recomendaciones from './containers/Recomendaciones/Recomendaciones';
import Postulante from "./pages/Postulante/Postulante";
import Empresa from "./pages/Empresa/Empresa";
import MasterForm from './containers/MasterForm/MasterForm';

const Routes = (props) => {
	/*
		<Route
			path="/postulantes/panel"
			exact
			component={() => (
				<PanelPostulante
					stages={props.stagesPostulante}
					tipoFormulario="postulante"
				/>
			)}
		/>
	*/
	return (
		<BrowserRouter>
			<Switch>
				<Route
					path="/postulantes/panel"
					exact
					render={({match}) => (
						<Postulante
							formPostulante={props.formPostulante}
							tipoFormulario="postulante"
							match={match}
						/>
					)}
				/>
				<Route
					path="/postulantes/panel/perfil-laboral"
					exact
					render={({match}) => (
						<Postulante
							formPostulante={props.formPostulanteLaboral}
							tipoFormulario="postulante"
							match={match}
						/>
					)}
				/>
				<Route
					path="/postulantes/panel/cuenta-usuario"
					exact
					render={({match}) => (
						<Postulante
							formPostulante={props.formCuentaUsuario}
							tipoFormulario="postulante"
							match={match}
						/>
					)}
				/>
				<Route
					path="/postulantes"
					render={({match}) => (
						<Postulante
							formPostulante={props.formPostulante}
							tipoFormulario="postulante"
							match={match}
						/>
					)}
				/>

				
				<Route
					path="/empresas/panel"
					exact
					render={({match}) => (
						<Empresa
							match={match}
						>
							<MasterForm
								formConfig={props.formEmpresa}
							/>
						</Empresa>
					)}
				/>
				<Route
					path="/empresas/panel/ofertas-laborales"
					exact
					render={({match}) => (
						<Empresa
							match={match}
						>
							<MasterForm
								formConfig={props.formPostulanteLaboral}
							/>
						</Empresa>
					)}
				/>
				<Route
					path="/empresas/panel/cuenta-usuario"
					exact
					render={({match}) => (
						<Empresa
							match={match}
						>
							<MasterForm
								formConfig={props.formCuentaUsuario}
							/>
						</Empresa>
					)}
				/>
				<Route
					path="/empresas"
					render={({match}) => (
						<Empresa
							match={match}
						>
							<MasterForm
								formConfig={props.formPostulante}
							/>
						</Empresa>
					)}
				/>


				<Route path="/recomendaciones" exact component={Recomendaciones} />
				{/*
				<Route path="/postulantes" exact component={() => (
					<MasterForm stages={props.stagesPostulante} tipoFormulario="postulante" titulo={"Registro postulante"} />
				)}/>
				<Route path="/empresas" exact component={() => (
					<MasterForm stages={props.stagesEmpresa} tipoFormulario="empresa" titulo={"Ingresar oferta"} />
				)}/>
				*/}

				

				<Route path="/logout" exact component={Landing} />

				<Route path="/" exact component={Landing} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
