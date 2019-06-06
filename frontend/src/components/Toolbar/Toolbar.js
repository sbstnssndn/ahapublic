import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from './../../assets/img/aha-logo.png';
import { Link } from 'react-router-dom';

let navStyle = {
    WebkitBoxShadow: '0px 1px 4px -1px rgba(133,126,126,1)',
    MozBoxShadow: '0px 1px 4px -1px rgba(133,126,126,1)',
    boxShadow: '0px 1px 4px -1px rgba(133,126,126,1)'
};

const ToolbarRB = (props) => (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">
        <img src={logo} width="60" height="45" alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/postulantes">Postulantes</Nav.Link>
        <Nav.Link href="/Empresas">Empresas</Nav.Link>
        <Nav.Link href="/Recomendaciones">Recomendaciones</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
);

export default ToolbarRB;