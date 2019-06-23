import React, { Component } from 'react';
import {
	Route,
	Switch,
	withRouter,
	Redirect
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import Panel from './components/Panel/Panel';
import Login from './containers/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import {
	ACCESS_TOKEN, 
	USER_TYPE_POSTULANTE,
	USER_TYPE_EMPRESA
} from './constants';
import { getCurrentUser } from './util/APIUtils';

import './App.css';

class App extends Component {

	state = {
		currentUser: null,
		isAuthenticated: false,
		isLoading: false,
		wasInitialized: false,
	}

	loadCurrentUser = () => {
    this.setState({
      isLoading: true
		});
		getCurrentUser()
			.then(response => {
				this.setState({
					currentUser: response,
					isAuthenticated: true,
					isLoading: false,
					wasInitialized: true
				});
			})
			.catch(error => {
				this.setState({
					isLoading: false,
					wasInitialized: true
				});  
			});
  }

  componentDidMount() {
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
  }

  handleLogin = () => {
		this.loadCurrentUser();
    this.props.history.push("/");
	}

	render () {

		let tipoPanel = "/postulante"
		if (this.state.currentUser !== null) {
			if(this.state.currentUser.role === USER_TYPE_POSTULANTE) {
				tipoPanel = "/postulante";
			} else if(this.state.currentUser.role === USER_TYPE_EMPRESA) {
				tipoPanel = "/empresa";
			} else {
				tipoPanel = "/aha";
			}
		}

		return (
			<React.Fragment>
				<Navigation
					currentUser={this.state.currentUser}
					isAuthenticated={this.state.isAuthenticated}
					handleLogout={this.handleLogout}
					match={this.props.match} />
				<Switch>
					<PrivateRoute
						authenticated={this.state.isAuthenticated}
						path='/postulante'
						component={Panel}
						wasInitialized={this.state.wasInitialized}
						currentUser={this.state.currentUser} />
					<Route
						exact
						path='/'
						render={
							(props) => this.state.isAuthenticated ? <Redirect to={tipoPanel} /> : <Landing {...props} />
						} />
					<Route
						path="/login"
						exact
						render={
							(props) =>  this.state.isAuthenticated ? this.props.history.goBack() : <Login onLogin={this.handleLogin} {...props} />
						} />

					{/*
					<Route
						path={`/postulante/:id`}
						render={
							this.state.currentUser === null ? <Redirect to="/" /> : <Panel currentUser={this.state.currentUser} />} />
					*/}
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</React.Fragment>
		);
	}
}

export default withRouter(App);