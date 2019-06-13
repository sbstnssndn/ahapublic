import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MasterForm from '../../containers/MasterForm/MasterForm';
//import Card from 'react-bootstrap/Card';
import Footer from '../../components/Footer/Footer';
//import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import NavbarEmpresa from './NavbarEmpresa/NavbarEmpresa';
//import Button from 'react-bootstrap/Button';
//import Pagination from 'react-bootstrap/Pagination'


class Empresa extends Component {

	render () {

		return (
			<React.Fragment>
				<NavbarEmpresa />

				<section id="formularios" className="py-4" style={{minHeight: '80vh'}}>
					<Container>
						<Row>
							<Col md={9} className="">
								
								<MasterForm
									formConfig={this.props.formEmpresa}
								/>

							</Col>
							<Col md={3}>
								<Link className="btn btn-primary btn-block" role="button" to="/empresas/panel">
									<h2>
										<i className="fas fa-address-card"></i>
									</h2>
									<h5>Datos empresa</h5>
								</Link>
								<Link className="btn btn-outline-secondary btn-block" role="button" to="/empresas/panel/ofertas-laborales">
									<h2>
										<i className="fas fa-briefcase"></i>
									</h2>
									<h5>Ofertas laborales</h5>
								</Link>
								<Link className="btn btn-outline-secondary btn-block" role="button" to="/empresas/panel/recomendaciones">
									<h2>
										<i className="fas fa-hands-helping"></i>
									</h2>
									<h5>Recomendados</h5>
								</Link>
								<Link className="btn btn-outline-secondary btn-block" role="button" to="/empresas/panel/cuenta-usuario">
									<h2>
										<i className="fas fa-user"></i>
									</h2>
									<h5>Mi cuenta</h5>
								</Link>
							</Col>
						</Row>
					</Container>
				</section>

				<Footer />

			</React.Fragment>
		);
	}
    
}

export default Empresa;