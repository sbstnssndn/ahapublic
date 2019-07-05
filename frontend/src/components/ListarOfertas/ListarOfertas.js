import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class ListarOfertas extends Component {

	state = {
		ofertas: [],
		error: false
	}

	componentDidMount () {
		
		let id = this.props.match.params.id;

		axios.get('http://localhost:8080/api/user/'+id+'/oferta')
		.then(response => {		
			this.setState({
				ofertas: response.data
			});
		}).catch(error => {
			this.setState({
				error: true
			});
		});
		
	}

	sinOfertas () {
		if(this.state.error === true){
			return (
				<h2> Error al consultar ofertas </h2>
			);
		}
		else if(this.state.ofertas.length === 0){
			return (
				<h2> Este usuario no posee ofertas </h2>
			);
		}
	}

	printOfertas() {
		if(this.state.ofertas.length !== 0){
			return (
				this.state.ofertas.map(oferta => {
					return (
						<Card.Body key={oferta.id}>
							<Form.Group>
								<Card.Title>{oferta.name}</Card.Title>
								<Card.Body>Descripción: {oferta.description}</Card.Body>
							</Form.Group>
							<hr/>
						</Card.Body>
					)
				})
			)
		}
	}

	render () {
		return (
			<React.Fragment>
				<Card className="mb-4">
					<Card.Header className="px-2">
						Ofertas
					</Card.Header>
					{this.sinOfertas()}
					{this.printOfertas()}
				</Card>
			</React.Fragment>
		);
	}
}

export default ListarOfertas;