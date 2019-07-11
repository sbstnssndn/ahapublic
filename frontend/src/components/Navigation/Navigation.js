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

					{/*Ofertas */}
					<NavigationItem exact to='/empresa/ofertas'>
						Mis ofertas
					</NavigationItem>

					{/*formEmpresaLaboral */}
					<NavigationItem exact to='/empresa/nueva-oferta'>
						Nueva oferta
					</NavigationItem>

					{/*formCuentaUsuario */}
					{/*<NavigationItem exact to='/empresa/cuenta-usuario'>
						Mi cuenta
					</NavigationItem>*/}
				</React.Fragment>
			)
			break;
		case USER_TYPE_AHA:
			navbarItems = (
				<React.Fragment>

					<NavigationItem exact to='/aha'>
						Postulantes
					</NavigationItem>

					<NavigationItem exact to='/aha/empresas'>
						Empresas
					</NavigationItem>

					<NavigationItem exact to='/aha/ofertas'>
						Ofertas
					</NavigationItem>

					<NavigationItem exact to='/aha/cuenta'>
						Mi cuenta
					</NavigationItem>
					
				</React.Fragment>
			)
			break;
		default:
			navbarItems = (
				<React.Fragment>
					<LinkContainer to="/">
						<Nav.Link>
							<span className="nav-link">Inicio</span>
						</Nav.Link>
					</LinkContainer>
					
					<LinkContainer to="/login">
						<Nav.Link>
							<span className="nav-link">Inicio de sesión</span>
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
									onLogin={props.onLogin}
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