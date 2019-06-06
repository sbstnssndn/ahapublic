import React, { Component } from 'react';
import NavbarPanel from '../../components/NavbarPanel/NavbarPanel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MasterForm from '../MasterForm/MasterForm';


class PanelPostulante extends Component {


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

				<section id="acciones" className="py-4 bg-light">
					<Container>
						<Row>
							<div className="col-md-3">
								<a href="/" className="btn btn-primary btn-block" data-toggle="modal" data-target="#addPostModal">
									<i className="fas fa-plus"></i> Add Post
								</a>
							</div>
							<div className="col-md-3">
								<a href="/" className="btn btn-success btn-block" data-toggle="modal" data-target="#addCategoryModal">
									<i className="fas fa-plus"></i> Add Category
								</a>
							</div>
							<div className="col-md-3">
								<a href="/" className="btn btn-warning btn-block" data-toggle="modal" data-target="#addUserModal">
									<i className="fas fa-plus"></i> Add User
								</a>
							</div>
						</Row>
					</Container>
				</section>

				<section id="formularios">
					<Container>
						<Row>
							<Col md={9}>
								<MasterForm stages={this.props.stages} tipoFormulario="postulante" titulo={"Registro postulante"} />
							</Col>
							<Col md={3}>
								Secciones de perfil
							</Col>
						</Row>
					</Container>
				</section>

			</React.Fragment>
		);
	}
    
}

export default PanelPostulante;