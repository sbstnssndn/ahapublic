import React from 'react';
import logo from './../../assets/img/aha-logo.png';
import { Link } from 'react-router-dom';

let navStyle = {
    WebkitBoxShadow: '0px 1px 4px -1px rgba(133,126,126,1)',
    MozBoxShadow: '0px 1px 4px -1px rgba(133,126,126,1)',
    boxShadow: '0px 1px 4px -1px rgba(133,126,126,1)'
};

const Toolbar = (props) => (
    <nav className="navbar navbar-expand-md navbar-light" style={navStyle}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
            <img src={logo} width="60" height="45" alt="" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/postulantes" className="nav-link">Postulantes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/empresas" className="nav-link">Empresas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/ofertas-publicadas" className="nav-link">Ofertas publicadas</Link>
                </li>
                <li className="nav-item">
                <Link to="/" className="nav-link disabled" tabIndex="-1" aria-disabled="true">Panel</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Toolbar;