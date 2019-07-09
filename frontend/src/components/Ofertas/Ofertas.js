import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Empresa from '../Empresa/Empresa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Route, Link } from "react-router-dom";

//Componente que lista todas las ofertas, con opción de dirigirse a la empresa
//correspondiente.
class Ofertas extends Component {

    state = {
        empresas : [],
        error : false
    }

    componentDidMount () {
        axios.get("http://localhost:8080/api/user/empresa/all")
        .then(response => {
			this.setState({
				empresas: response.data
            });
        })
        .catch(function(error){
            console.log(error);
		})
    }
    
    botones(oferta, id_empresa) {

        if(oferta != null){
            return (
                <Row>
					<Col>
						<Link to={`/aha/empresas/${id_empresa}`} >
							<Button variant="success" type="submit">
								Ver empresa
							</Button>
						</Link>						
					</Col>

                    <Col>
						<Link to={`/aha/oferta/${oferta.id}/detalle`} >
							<Button variant="success" type="submit">
								Ver detalle
							</Button>
						</Link>						
					</Col>

                </Row>
            );
        }
    }

    printOfertas(perfilEmpresa, id_empresa) {

        //Verifica que exista perfil de empresa
        if(perfilEmpresa != null){
            //Verifica que la empresa posea ofertas
            if(perfilEmpresa.ofertas){
                return(
                    perfilEmpresa.ofertas.map(oferta => {
                        return (
                            <Card.Body key={oferta.id}>
                                <Form.Group>
                                    <Card.Title>{oferta.name}</Card.Title>
                                    <Card.Body> Descripción: {oferta.description}</Card.Body>
                                    {this.botones(oferta, id_empresa)}
                                </Form.Group>
                                <hr/>
                            </Card.Body>
                        )
                    })
                )
            }
        }
    }

    render () {
		return (
			<React.Fragment>
				<Card className="mb-4">
					<Card.Header className="px-2">
						Ofertas
					</Card.Header>
                    
                    {this.state.empresas.map(empresa => {
                        return(
                            <React.Fragment key={empresa.id}>
                                {this.printOfertas(empresa.perfilEmpresa, empresa.id)}
                            </React.Fragment>
                        )
                    })}
				</Card>
			</React.Fragment>
		);
	}
}

export default Ofertas;