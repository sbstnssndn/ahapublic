import React, { Component } from 'react';
import NavbarPanel from '../../components/NavbarPanel/NavbarPanel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MasterForm from '../MasterForm/MasterForm';
import Card from 'react-bootstrap/Card';
//import Pagination from 'react-bootstrap/Pagination'


class PanelEmpresa extends Component {

	render () {

		return (
			<React.Fragment>
				<NavbarPanel />

				<header id="main-header" className="py-2 bg-primary text-white">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h2>
									<i className="fas fa-cog"></i> Panel de usuario
								</h2>
							</div>
						</div>
					</div>
				</header>

				<section id="acciones" className="py-2 bg-light">
					<Container>
						<Row>
              
            			</Row>
					</Container>
				</section>

				<section id="formularios">
					<Container>
						<Row>
							<Col md={9} className="px-0">
								<Card>
									<Card.Header className="p-2">
										<MasterForm stages={this.props.stages} tipoFormulario="empresa" titulo={"Registro empresa"} />
									</Card.Header>
								</Card>
							</Col>
							<Col md={3}>
								<Card variant="primary" bg="primary" text="white" className="text-center mb-3">
									<Card.Body>
										<h2>
											<i className="fas fa-user"></i>
										</h2>
										<h4>Cuenta usuario</h4>
									</Card.Body>
								</Card>
								<Card variant="primary" bg="primary" text="white" className="text-center mb-3">
									<Card.Body>
										<h2>
											<i className="fas fa-address-card"></i>
										</h2>
										<h4>Datos personales</h4>
									</Card.Body>
								</Card>
								<Card variant="primary" bg="primary" text="white" className="text-center mb-3">
									<Card.Body>
										<h2>
											<i className="fas fa-briefcase"></i>
										</h2>
										<h4>Datos laborales</h4>
									</Card.Body>
								</Card>					
							</Col>
						</Row>
					</Container>
				</section>

				<footer id="footer-panel" className="bg-dark text-white mt-5 pt-3">
					<Container>
						<Row>
							<Col>
								<p className="text-center mb-2">
									AHA Inclusión &copy; 2019
								</p>
							</Col>
						</Row>
					</Container>
				</footer>

			</React.Fragment>
		);
	}
    
}

export default PanelEmpresa;