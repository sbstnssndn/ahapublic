import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Recomendaciones from './containers/Recomendaciones/Recomendaciones';
import Postulante from "./pages/Postulante/Postulante";
import Empresa from "./pages/Empresa/Empresa";

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
					render={() => (
						<Postulante
							formPostulante={props.formPostulante}
							tipoFormulario="postulante"
						/>
					)}
				/>
				<Route
					path="/postulantes/panel/perfil-laboral"
					exact
					render={() => (
						<Postulante
							formPostulante={props.formPostulanteLaboral}
							tipoFormulario="postulante"
						/>
					)}
				/>
				<Route
					path="/postulantes/panel/cuenta-usuario"
					exact
					render={() => (
						<Postulante
							formPostulante={props.formCuentaUsuario}
							tipoFormulario="postulante"
						/>
					)}
				/>
				<Route
					path="/postulantes"
					render={() => (
						<Postulante
							formPostulante={props.formPostulante}
							tipoFormulario="postulante"
						/>
					)}
				/>

				
				<Route
					path="/empresas/panel"
					exact
					render={() => (
						<Empresa
							formEmpresa={props.formPostulante}
							tipoFormulario="empresa"
						/>
					)}
				/>
				<Route
					path="/empresas/panel/ofertas-laborales"
					exact
					render={() => (
						<Empresa
							formEmpresa={props.formPostulanteLaboral}
							tipoFormulario="empresa"
						/>
					)}
				/>
				<Route
					path="/empresas/panel/cuenta-usuario"
					exact
					render={() => (
						<Empresa
							formEmpresa={props.formCuentaUsuario}
							tipoFormulario="empresa"
						/>
					)}
				/>
				<Route
					path="/empresas"
					render={() => (
						<Empresa
							formEmpresa={props.formPostulante}
							tipoFormulario="empresa"
						/>
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
