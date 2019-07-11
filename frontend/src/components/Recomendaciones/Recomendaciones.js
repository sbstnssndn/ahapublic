import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import styles from '../Paginacion/App.module.css';
import { Link } from "react-router-dom";

class Recomendaciones extends Component {

	state = {
        recs: [],
        oferta: [],
        recsPage: {},
        total: 0,
        recsByPage: 10,
        pages: 0,
        currentPage: 1,
        pageNumbers: [],
        charged: false
    }

    componentDidMount () {
        
        let id = this.props.match.params.id;
        
        axios.get("http://localhost:8080/api/oferta/"+id+"/recommendations")
        	.then(response => {
				this.setState({
                    recs: response.data,
                    total: response.data.length
                });
                this.paginar();
                this.setState({
					charged: true
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
    
    paginar() {
		//Cuantas paginas hacer
		//Para 10 perfiles, requiere 1 sola hoja y no 2
		if(this.state.total%10 === 0){
			this.setState({
				pages: Math.trunc(this.state.total  / this.state.recsByPage)
			});
		}
		//Para 19 perfiles, requiere ya 2 hojas
		//Para 2, solo 1 hoja
		else{
			this.setState({
				pages: Math.trunc(this.state.total  / this.state.recsByPage) + 1
			})
		}
		
        let recsAux = [];

        for(let i = 0; i < this.state.pages ; i++){
            
            let page = {
                id: i + 1,
                recs: []
            };

            for(let j = 0; j < this.state.recsByPage; j++){
                if(this.state.recs[i*this.state.recsByPage + j] != null){
                    page.recs.push(this.state.recs[i*this.state.recsByPage + j]);
                }
            }
            this.state.pageNumbers.push(i + 1);
            recsAux.push(page);
        }

        this.setState({
            recs: recsAux,
            recsPage: recsAux[0]
        });
    }

    postulante(user){
		
		let id = user.userSummary.id;

        return (
			<Link to={`/aha/postulante/${id}`}>
				<Button variant="success" type="primary" size="sm">
					Ver perfil
				</Button>
			</Link>
        );
    }
    
    cambiaPagina(number){
        
        let aux = this.state.recs[number - 1];

        this.setState({
            currentPage: number,
            recsPage: aux
        });
    }

    printUsers(){
        if(this.state.charged){
            return (
                <React.Fragment>
					<table className={styles.table}>
						<thead>
                            <tr>
                                <th>Postulante </th>
                                <th>Correo </th>
                                <th>Teléfono 1</th>
                                <th>Teléfono 2</th>
                                <th>Compatibilidad </th>
                                <th> Ver </th>
                            </tr>
						</thead>
						<tbody>
                            {this.state.recsPage.recs.map(user => {
                                return (
                                    <tr key={user.userSummary.id}>
                                        <td> {user.userSummary.name} </td>
                                        <td> {user.userSummary.details.email2}</td>
                                        <td> +{user.userSummary.details.telefono1}</td>
                                        <td> +{user.userSummary.details.telefono2}</td>
                                        <td> {user.percentage} </td>
                                        <td> {this.postulante(user)} </td> 
                                    </tr>
                                )
                            })}
						</tbody>
					</table>           
                </React.Fragment>
            )
		}
    }

    render () {
        if(this.state.recs != null || this.state.recsPage.recs != null){
            return (
                <React.Fragment>
                    <Card className="mb-4">
                        <Card.Header className="px-2">
                            Recomendaciones - {this.state.oferta.name}
                        </Card.Header>
                    </Card> 
                    
                    <div className={styles.app}>
                        <div className={styles.pagination}>
                            {this.state.pageNumbers.map(number => {
                                //Evalúa si el numero recorrido es la pagina actual para señalar como activa
                                let classes = this.state.currentPage === number ? styles.active : '';
                                return (
                                    <span key={number} className={classes} onClick={() => this.cambiaPagina(number)}>{number+" "}</span>
                                )
                            })}
                        </div>
                        {this.printUsers()}
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default Recomendaciones;