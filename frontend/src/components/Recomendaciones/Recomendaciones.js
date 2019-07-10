import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import styles from '../Paginacion/App.module.css';
import { Link } from "react-router-dom";

class Recomendaciones extends Component {

	state = {
		recs: []
    }

    componentDidMount () {
        
        let id = this.props.match.params.id;
        axios.get("http://localhost:8080/api/oferta/"+id+"/recommendations")
        	.then(response => {
				this.setState({
					recs: response.data
				});
            })
            .catch(function(error){
            	console.log(error);
			})
		
	}
    
    render() {
        if(this.state.recs != null){
            return (
                <React.Fragment>
                    <Card className="mb-4">
                        <Card.Header className="px-2">
                            Recomendaciones: {this.state.recs.length}
                        </Card.Header>
                    </Card>  
                </React.Fragment>
            )
        }
    }
}

export default Recomendaciones;