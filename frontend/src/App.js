import React, { Component } from 'react';
//import Routes from "./Routes";
import {
	Route,
	Switch,
	withRouter
} from "react-router-dom";
import './App.css';
/*
import formPreguntas from './formularios/formPreguntas';
import formPostulanteLaboral from './formularios/formPostulanteLaboral';
import formPostulante from './formularios/formPostulante';
import formEmpresa from './formularios/formEmpresa';
import formCuentaUsuario from './formularios/formCuentaUsuario';
*/
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import Panel from './components/Panel/Panel';
import Login from './containers/Login/Login';

class App extends Component {

	state = {
		currentUser: null,
		isAuthenticated: false,
		isLoading: false
	}

	loadCurrentUser = () => {
    this.setState({
      isLoading: true
		});
		console.log("voy a ejecutar getCurrentUser() en App.js");
		getCurrentUser()
			.then(response => {
				console.log("response en getCurrentUser():")
				console.log(response)
				this.setState({
					currentUser: response,
					isAuthenticated: true,
					isLoading: false
				});
				console.log(this.state)
			})
			.catch(error => {
				console.log(error)
				this.setState({
					isLoading: false
				});  
			});
  }

  componentDidMount() {
		console.log("Estoy en componentDidMount() App.js")
    this.loadCurrentUser();
  }

  // Handle Logout, Set currentUser and isAuthenticated state which will be passed to other components
  handleLogout = (redirectTo="/", /*notificationType="success", description="Cerraste sesión correctamente"*/) => {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    /*
    notification[notificationType]({
      message: 'AHA Inclusión',
      description: description,
		});
		*/
  }

  /* 
   This method is called by the Login component after successful login 
   so that we can load the logged-in user details and set the currentUser &
   isAuthenticated state, which other components will use to render their JSX
  */
  handleLogin = () => {
		/*
    notification.success({
      message: 'AHA Inclusión',
      description: "Iniciaste sesión correctamente.",
		});
		*/
		console.log("ejecutando handleLogin() en App.js");
		this.loadCurrentUser();
		console.log(this.state.currentUser);
    this.props.history.push("/");
  }

	render () {
		return (
			<React.Fragment>
				<Navigation userType="postulante" />
				<Switch>
					<Route exact path='/' component={Landing} />

					<Route path="/login" 
						render={(props) => <Login onLogin={this.handleLogin} {...props} />} />

					<Route path='/postulante' component={Panel} />
					{/*
					<Routes
						formPostulante={formPostulante}
						formPostulanteLaboral={formPostulanteLaboral}
						formEmpresa={formEmpresa}
						formCuentaUsuario={formCuentaUsuario}
						formPreguntas={formPreguntas}
					/>
					*/}
				</Switch>
			</React.Fragment>
		);
	}
}

export default withRouter(App);