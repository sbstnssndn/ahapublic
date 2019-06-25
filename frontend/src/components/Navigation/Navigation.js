import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
 
import logo from '../../assets/img/aha-logo.png';
import styles from './Navigation.module.css';
import { USER_TYPE_POSTULANTE, USER_TYPE_EMPRESA, USER_TYPE_AHA } from '../../constants';
import NavigationItem from '../NavigationItem/NavigationItem';
import NavigationUserOptions from '../NavigationUserOptions/NavigationUserOptions';

const Navigation = ( props ) => {

	let navbarItems = null;
	let userType = "GUEST";

	if (props.currentUser !== null) {
		userType = props.currentUser.role;
	}

	switch (userType) {
		case USER_TYPE_POSTULANTE:
			navbarItems = (
				<React.Fragment>
					<NavigationItem exact to='/postulante'>
						Datos personales
					</NavigationItem>
					<NavigationItem exact to='/postulante/perfil-laboral'>
						Datos laborales
					</NavigationItem>
					<NavigationItem exact to='/postulante/cuenta'>
						Mi cuenta
					</NavigationItem>
				</React.Fragment>
			)
			break;
		case USER_TYPE_EMPRESA:
			navbarItems = (
				<React.Fragment>
					{/*formEmpresa */}
					<NavigationItem exact to='/empresa'>
						Datos empresa
					</NavigationItem>

					<NavigationItem exact to='/empresa/ofertas-laborales'>
						Ofertas laborales
					</NavigationItem>

					{/*formEmpresaLaboral */}
					<NavigationItem exact to='/empresa/nueva-oferta'>
						Nueva oferta
					</NavigationItem>

					{/*recomendaciones */}
					<NavigationItem exact to='/empresa/recomendaciones'>
						Recomendaciones
					</NavigationItem>

					{/*formCuentaUsuario */}
					<NavigationItem exact to='/empresa/cuenta-usuario'>
						Mi cuenta
					</NavigationItem>
				</React.Fragment>
			)
			break;
		case USER_TYPE_AHA:
			break;
		default:
			navbarItems = (
				<React.Fragment>
					<LinkContainer to="/">
						<Nav.Link>
							<span className="nav-link">Inicio</span>
						</Nav.Link>
					</LinkContainer>
					
					<LinkContainer to="/postulante">
						<Nav.Link>
							<span className="nav-link">Postulante</span>
						</Nav.Link>
					</LinkContainer>
					
					<LinkContainer to="/empresa">
						<Nav.Link>
							<span className="nav-link">Empresa</span>
						</Nav.Link>
					</LinkContainer>
					
					<LinkContainer to="/postulantes/preguntas">
						<Nav.Link>
							<span className="nav-link">Preguntas</span>
						</Nav.Link>
					</LinkContainer>
				</React.Fragment>
			)
			break;
	}

		return (
			<>
				<Navbar expand="sm" variant="light" className={styles.NavbarPanel} collapseOnSelect>
					<Container>

						<Navbar.Brand>
							<Link to="/">
								<img src={logo} width="60" height="45" alt="Logo AHA Inclusión" />
							</Link>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="responsive-navbar-nav" />

						<Navbar.Collapse id="responsive-navbar-nav">

							<Nav>
								{ navbarItems }
							</Nav>
							<Nav className="ml-auto">
								<NavigationUserOptions
									onLogin={props.handleLogin}
									userType={props.userType}
									isAuthenticated={props.isAuthenticated}
									handleLogout={props.handleLogout} />
							</Nav>

						</Navbar.Collapse>

					</Container>
				</Navbar>
			</>
		);
	
}

export default Navigation;