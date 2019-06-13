import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
 
import logo from '../../../assets/img/aha-logo.png';
import styles from './NavbarLanding.module.css';

const NavbarLanding = (props) => {
	return (
		<Navbar expand="md" variant="light" fixed="top" collapseOnSelect className={styles.Navbar}>
			<Container>

				<Navbar.Brand>
					<Link to="/">
						<img src={logo} width="60" height="45" alt="Logo AHA Inclusión" />
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						
						<LinkContainer to="/">
							<Nav.Link>
								<span className="nav-link">Inicio</span>
							</Nav.Link>
						</LinkContainer>
						
						<LinkContainer to="/postulantes/panel">
							<Nav.Link>
								<span className="nav-link">Postulantes</span>
							</Nav.Link>
						</LinkContainer>
						
						<LinkContainer to="/empresas/panel">
							<Nav.Link>
								<span className="nav-link">Empresas</span>
							</Nav.Link>
						</LinkContainer>
						
						<LinkContainer to="/postulantes/preguntas">
							<Nav.Link>
								<span className="nav-link">Preguntas</span>
							</Nav.Link>
						</LinkContainer>

						<LinkContainer to="/recomendaciones">
							<Nav.Link>
								<span className="nav-link">Recomendaciones</span>
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
					<LinkContainer to="/login">
							<Nav.Link>
								<Button variant="outline-primary">Ingresar</Button>
							</Nav.Link>
						</LinkContainer>
				</Navbar.Collapse>

			</Container>
		</Navbar>
	)
}

export default NavbarLanding;