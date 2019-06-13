import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../../assets/img/aha-logo.png';
import styles from './NavbarEmpresa.module.css';

const NavbarEmpresa = (props) => (
    <React.Fragment>
			<Navbar expand="sm" variant="light" className={styles.NavbarEmpresa} collapseOnSelect>
				<Container>

					<Navbar.Brand>
						<Link to="/">
							<img src={logo} width="60" height="45" alt="Logo AHA Inclusión" />
						</Link>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav>
							<LinkContainer exact to="/empresas/panel" className="px-4">
								<Nav.Link>
									Datos empresa
								</Nav.Link>
							</LinkContainer>
							<LinkContainer exact to="/empresas/panel/ofertas-laborales" className="px-4">
								<Nav.Link>
									Ofertas laborales
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/empresas/panel/recomendaciones" className="px-4">
								<Nav.Link>
									Recomendaciones
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/cuenta-usuario" className="px-4">
								<Nav.Link>
									Mi cuenta
								</Nav.Link>
							</LinkContainer>
							{/*
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
							*/}
						</Nav>
						<Nav className="ml-auto">
							<LinkContainer to="/logout">
								<Nav.Link>
									<Button variant="outline-secondary">
										<i className="fas fa-user-times pr-2"></i> Cerrar sesión
									</Button>
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>

				</Container>
			</Navbar>
		</React.Fragment>
);

export default NavbarEmpresa;