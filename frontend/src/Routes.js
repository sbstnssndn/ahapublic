import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from './containers/Landing/Landing';
import Recomendaciones from './containers/Recomendaciones/Recomendaciones';
import PanelPostulante from './containers/PanelPostulante/PanelPostulante';

const Routes = (props) => {
	return (
		<Switch>
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
			<Route
				path="/empresas/panel"
				exact
				component={() => (
					<PanelPostulante
						stages={props.stagesEmpresa}
						tipoFormulario="empresa"
					/>
				)}
			/>
			<Route
				path="/postulantes/preguntas"
				exact
				component={() => (
					<PanelPostulante
						stages={props.stagesPreguntas}
						tipoFormulario="Preguntas"
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
	);
}

export default Routes;
