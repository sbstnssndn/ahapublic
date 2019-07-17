import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import axios from 'axios';
import ListarOfertas from '../ListarOfertas/ListarOfertas';
import { getUser } from '../../util/APIUtils';

import {
	Link,
	Route
} from "react-router-dom";

class Empresa extends Component {

	state = {
		empresa: []
	}

	componentDidMount () {
        
        let id_empresa = this.props.match.params.id;
		getUser(id_empresa)
        	.then(response => {
				this.setState({
					empresa: response
                });
            })
            .catch(function(error){
            	console.log(error);
			})
		
	}

	nombre(empresa){
		if(empresa.perfilEmpresa != null){
			if(empresa.perfilEmpresa.nameEmpresa != null){
				return ( 
					<label> 
						{empresa.perfilEmpresa.nameEmpresa} 
					</label>
				);
			}
			else{
				return ( 
					<label> 
						Aún no define nombre
					</label> 
				);
			}
		}
		else{
			return ( 
				<label> 
					Aún no define perfil
				</label> 
			);
        }
    }
    
    perfil(perfilEmpresa) {
        if(perfilEmpresa != null){
            return (
                <React.Fragment>
                    <Card.Body> Rut Empresa: {perfilEmpresa.rutEmpresa }</Card.Body>
                    <Card.Body> Telefono 1: {perfilEmpresa.telefono1} </Card.Body>
                    <Card.Body> Telefono 2: {perfilEmpresa.telefono2} </Card.Body>
                    <Card.Body> Correo 2: {perfilEmpresa.email2} </Card.Body>
                </React.Fragment>
            )
        }
        else {
            return ( 
				<label> Aún no define perfil </label> 
            );
        }
    }

	botones(empresa){
		
		return ( 

			<Row>
			    <Route
					path={`/aha/empresas/:id/ofertas`}
					exact
					render={(props) => (
					<ListarOfertas id={empresa.id}/>
				)} />
				<Col xs="4">
					<Button variant="primary" type="submit">
						Editar Perfil Empresa
					</Button>
				</Col>
				<Col>
					<Link to={`/aha/empresas/${empresa.id}/ofertas`} >
						<Button variant="success" type="submit">
							Ofertas
						</Button>
					</Link>
				</Col>
			</Row>
		);
	}

	render () {
		return (
			<React.Fragment>
				<Card className="mb-4">
					<Card.Header className="px-2">
						Empresa: {this.nombre(this.state.empresa)}
					</Card.Header>
									
					
					<Card.Body key={this.state.empresa.id}>
						<Form.Group>
							<Card.Title>Correo electrónico: {this.state.empresa.email}</Card.Title>
                            <hr></hr>
                            {this.perfil(this.state.empresa.perfilEmpresa)}
							{this.botones(this.state.empresa)}
						</Form.Group>
					</Card.Body>
				</Card>
			</React.Fragment>
		);
	}
}

export default Empresa;