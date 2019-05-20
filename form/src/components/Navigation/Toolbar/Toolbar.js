import React from 'react';
import logo from './../../../assets/img/aha-logo.png';

let navStyle = {
    webkitBoxShadow: '0px 1px 4px -1px rgba(133,126,126,1)',
    mozBoxShadow: '0px 1px 4px -1px rgba(133,126,126,1)',
    boxShadow: '0px 1px 4px -1px rgba(133,126,126,1)'
};

const Toolbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="">
            <img src={logo} width="60" height="45" alt="" />
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="">Inicio<span className="sr-only">(actual)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Postulantes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Empresas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="" tabindex="-1" aria-disabled="true">Panel</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Toolbar;