import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import styles from '../Paginacion/App.module.css';
//import { Link } from "react-router-dom";

class Recomendaciones extends Component {

	state = {
        recs: [],
        oferta: []
    }

    componentDidMount () {
        
        let id = this.props.match.params.id;
        axios.get("http://localhost:8080/api/oferta/"+id+"/recommendations")
        	.then(response => {
				this.setState({
					recs: response.data
                });
                axios.get("http://localhost:8080/api/oferta/"+id)
                    .then(response => {
                        this.setState({
                            oferta: response.data
                        })
                    })
                    .catch(function(error){
                        console.log(error)
                    })
            })
            .catch(function(error){
            	console.log(error);
			})
    }
    
    postulante(user){
		
		let id = user.id;

        return (
			//<Link to={`/aha/empresas/${id_empresa}`}>
				<Button variant="success" type="primary" size="sm">
					Ver perfil
				</Button>
			//</Link>
        );
	}
    
    render() {
        if(this.state.recs != null && this.state.oferta != null){
            return (
                <React.Fragment>
                    <Card className="mb-4">
                        <Card.Header className="px-2">
                            Recomendaciones - {this.state.oferta.name}
                        </Card.Header>

                        
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Postulante </th>
                                    <th>Compatibilidad </th>
                                    <th>Ver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.recs.map(user => {
                                    return (
                                        <tr key={user.userSummary.id}>
                                            <td> {user.userSummary.name} </td>
                                            <td> {user.percentage} </td>
                                            <td> {this.postulante(user)} </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>           
                

                    </Card>  
                </React.Fragment>
            )
        }
    }
}

export default Recomendaciones;