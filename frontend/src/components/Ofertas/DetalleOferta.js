import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ListarOfertas from '../ListarOfertas/ListarOfertas';

import {
	Link,
	Route
} from "react-router-dom";

class DetalleOferta extends Component {

	state = {
		oferta: []
	}

	componentDidMount () {
        
        let id_oferta = this.props.match.params.id;
		axios.get('http://localhost:8080/api/oferta/'+id_oferta)
        	.then(response => {
				this.setState({
                    oferta: response.data
                });
            })
            .catch(function(error){
            	console.log(error);
			})
		
    }

    render() {
        return (
            <React.Fragment>
				<Card className="mb-4">
					<Card.Header className="px-2">
						Oferta: {this.state.oferta.id}
					</Card.Header>									
				</Card>
			</React.Fragment>
        );
    }
}

export default DetalleOferta;