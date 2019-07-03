import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class ListarOfertas extends Component {

	state = {
		ofertas: []
	}

	componentDidMount () {
		
		let id = this.props.match.params.id;
		console.log(id);

		axios.get('http://localhost:8080/api/user/'+id+'/oferta')
		.then(response => {
			console.log(response.data);
			this.setState({
				ofertas: response.data
			});
		}).catch(error => {
			console.log(error);
		});
		
	}

	render () {
		return (
			<React.Fragment>
				<Card className="mb-4">
					<Card.Header className="px-2">
						Ofertas
					</Card.Header>
					
					{this.state.ofertas.map(oferta => {
						return (
							<Card.Body key={oferta.id}>
								<Form.Group>
									<Card.Title>{oferta.name}</Card.Title>
									<Card.Body>Descripción: {oferta.description}</Card.Body>
								</Form.Group>
							</Card.Body>
						)
					})}
				</Card>
			</React.Fragment>
		);
	}
}

export default ListarOfertas;