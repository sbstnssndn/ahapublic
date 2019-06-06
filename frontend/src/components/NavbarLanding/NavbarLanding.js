import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
 
import logo from './../../assets/img/aha-logo.png';
import styles from './NavbarLanding.module.css';

const NavbarLanding = (props) => {
	return (
		<Navbar collapseOnSelect expand="md" variant="light" className={styles.Navbar}>
			<Container>

				<Navbar.Brand href="#home">
					<img src={logo} width="60" height="45" alt="Logo AHA Inclusión" />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link>
							<Link to="/" className="nav-link">Inicio</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/postulantes" className="nav-link">Postulantes</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/empresas" className="nav-link">Empresas</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/recomendaciones" className="nav-link">Recomendaciones</Link>
						</Nav.Link>
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
					<Nav>
						<Button variant="outline-primary">Ingresar</Button>
					</Nav>
				</Navbar.Collapse>

			</Container>
		</Navbar>
	)
}

export default NavbarLanding;