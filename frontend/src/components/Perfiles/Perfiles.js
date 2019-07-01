import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class Perfiles extends Component {

	state = {
		users: []
	}

	componentDidMount () {
		
		axios.get("http://localhost:8080/api/user/"+this.props.typeUsers+"/all")
        	.then(response => {
				this.setState({
					users: response.data
			  	});
            })
            .catch(function(error){
            	console.log(error);
			})
		
	}

	nombre(user){
		if(this.props.typeUsers === "candidato"){
			return ( 
				<label> 
					{user.perfilCandidato.firstName+" "}
					{user.perfilCandidato.lastName}
				</label> 
			);
		}
		else if(this.props.typeUsers === "empresa"){
			return ( <label> {user.perfilEmpresa.nameEmpresa} </label>);
		}
	}

	render () {
		return (
			<React.Fragment>
				<Card className="mb-4">
					<Card.Header className="px-2">
						{this.props.title}
					</Card.Header>
									
					{this.state.users.map(user => {
						return (
							<Card.Body key={user.id}>
								<Form.Group>
									<Card.Title>{this.nombre(user)} - {user.email}</Card.Title>
									<Row>
										<Col>
											<Button variant="primary" type="submit">
												Editar
											</Button>
										</Col>
									</Row>
								</Form.Group>
							</Card.Body>
						)
					})}

				</Card>
			</React.Fragment>
		);
	}
}

export default Perfiles;