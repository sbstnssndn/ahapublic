import React, { Component } from 'react';
import NavbarPanel from '../../components/NavbarPanel/NavbarPanel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


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

				<section id="actions" className="py-4 mb-4 bg-light">
					<Container>
						<Row className="justify-content-md-center">
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
			</React.Fragment>
		);
	}
    
}

export default PanelPostulante;