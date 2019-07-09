import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ListarOfertas from '../ListarOfertas/ListarOfertas';
import styles from './App.module.css';


import {
	Link,
	Route
} from "react-router-dom";

class Perfiles extends Component {

	state = {
		users: [],
        usersPage: {},
        total: 0,
        usersByPage: 10,
        pages: 0,
        currentPage: 1,
        pageNumbers: [],
        charged: false
	}

	componentDidMount () {
		
		axios.get("http://localhost:8080/api/user/"+this.props.typeUsers+"/all")
        	.then(response => {
				this.setState({
					users: response.data,
                	total: response.data.length,
                	pages: Math.trunc(response.data.length  / this.state.usersByPage + 1)
				});
				this.paginar();
				this.setState({
					charged: true
				})
            })
            .catch(function(error){
            	console.log(error);
			})
		
	}

	paginar() {

        let usersAux = [];

        for(let i = 0; i < this.state.pages ; i++){
            
            let page = {
                id: i + 1,
                users: []
            };

            for(let j = 0; j < this.state.usersByPage; j++){
                if(this.state.users[i*this.state.usersByPage + j] != null){
                    page.users.push(this.state.users[i*this.state.usersByPage + j]);
                }
            }
            this.state.pageNumbers.push(i + 1);
            usersAux.push(page);
        }

        this.setState({
            users: usersAux,
            usersPage: usersAux[0]
        });
        console.log("TODOS", this.state.users);
        console.log("Actuales", this.state.usersPage);
    }

	nombre(user){
		if(this.props.typeUsers === "candidato"){
			if(user.perfilCandidato != null){
				if(user.perfilCandidato.firstName != null && user.perfilCandidato.lastName != null){
					return ( 
						<td> 
							{user.perfilCandidato.firstName+" "}
							{user.perfilCandidato.lastName}
						</td> 
					);
				}
				else{
					return ( 
						<td> 
							Aún no define nombre
						</td> 
					);
				}
			}
			else{
				return ( 
					<td> 
						Aún no define perfil
					</td> 
				);
			}
		}
		else if(this.props.typeUsers === "empresa"){
			if(user.perfilEmpresa != null){
				if(user.perfilEmpresa.nameEmpresa != null){
					return ( 
						<td> 
							{user.perfilEmpresa.nameEmpresa} 
						</td>
					);
				}
				else{
					return ( 
						<td> 
							Aún no define nombre
						</td> 
					);
				}
			}
			else{
				return ( 
					<td> 
						Aún no define perfil
					</td> 
				);
			}
		}
	}

	cambiaPagina(number){
        
        let aux = this.state.users[number - 1];

        this.setState({
            currentPage: number,
            usersPage: aux
        });
    }

	boton(user){
		if(this.props.typeUsers === "candidato"){
			return ( 
				<td>
					<Button variant="primary" type="submit">
						Ver Perfil
					</Button>
				</td>
			);
		}
		else if(this.props.typeUsers === "empresa"){
			return ( 
				<td>
					<Link to={`/aha/empresas/${user.id}`} >
						<Button variant="primary" type="submit">
							Ver empresa
						</Button>
					</Link>
				</td>
			);
		}
	}

	printUsers(){
		if(this.state.charged){
            return (
                <React.Fragment>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Nombre </th>
								<th>Email</th>
								<th>Ingresar</th>
							</tr>
						</thead>
						<tbody>
							{this.state.usersPage.users.map(user => {
								return (
									<tr key={user.id}>
										{this.nombre(user)}
										<td> {user.email} </td>
										{this.boton(user)}
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
		if(this.state.users != null || this.state.usersPage.users != null){
			return (
				<React.Fragment>
					<Card className="mb-4">
						<Card.Header className="px-2">
							{this.props.title}
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

export default Perfiles;