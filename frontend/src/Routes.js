import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Recomendaciones from './containers/Recomendaciones/Recomendaciones';
import Login from './containers/Login/Login';
import Postulante from "./pages/Postulante/Postulante";
import Empresa from "./pages/Empresa/Empresa";
import MasterForm from './containers/MasterForm/MasterForm';
import ListarOfertas from "./components/ListarOfertas/ListarOFertas";

const Routes = (props) => {
	
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
					path="/postulantes/panel/preguntas"
					exact
					render={({match}) => (
						<Postulante
							formPostulante={props.formPreguntas}
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
					path="/empresas"
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
					path="/empresas/ofertas-laborales"
					exact
					render={({match}) => (
						<Empresa
							match={match}
						>
							<ListarOfertas />
						</Empresa>
					)}
				/>
				<Route
					path="/empresas/cuenta-usuario"
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
					path="/empresas/recomendaciones"
					exact
					render={({match}) => (
						<Empresa
							match={match}
						>
							<Recomendaciones/>
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

				<Route path="/login" exact component={Login} />				

				<Route path="/logout" exact component={Landing} />

				<Route path="/" exact component={Landing} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
