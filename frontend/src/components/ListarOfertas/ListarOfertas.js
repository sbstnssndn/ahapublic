import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../Paginacion/App.module.css';
import { Link } from "react-router-dom";

//Lista ofertas de una empresa
class ListarOfertas extends Component {

	state = {
		ofertas : [],
        ofertasPage: {},
        total: 0,
        ofertasByPage: 10,
        pages: 0,
        currentPage: 1,
        pageNumbers: [],
        charged: false
	}

	componentDidMount () {
		
		let id = this.props.match.params.id;

		axios.get('http://localhost:8080/api/user/'+id+'/oferta')
		.then(response => {
			this.setState({
				ofertas: response.data,
				total: response.data.length
			});
			this.paginar();
			this.setState({
				charged: true
			})
		}).catch(error => {
			console.log(error);
		});
	}

	paginar() {

        //Cuantas paginas hacer
		if(this.state.total%10 === 0){
			this.setState({
				pages: Math.trunc(this.state.total  / this.state.ofertasByPage)
			});
		}
		else{
			this.setState({
				pages: Math.trunc(this.state.total  / this.state.ofertasByPage) + 1
			})
		}

        let ofertasAux = [];

        for(let i = 0; i < this.state.pages ; i++){
            
            let page = {
                id: i + 1,
                ofertas: []
            };

            for(let j = 0; j < this.state.ofertasByPage; j++){
                if(this.state.ofertas[i*this.state.ofertasByPage + j] != null){
                    page.ofertas.push(this.state.ofertas[i*this.state.ofertasByPage + j]);
                }
            }
            this.state.pageNumbers.push(i + 1);
            ofertasAux.push(page);
        }

        this.setState({
            ofertas: ofertasAux,
            ofertasPage: ofertasAux[0]
        });
	}
	
	cambiaPagina(number){
        
        let aux = this.state.ofertas[number - 1];

        this.setState({
            currentPage: number,
            ofertasPage: aux
        });
    }

	empresa(){
		
		let id_empresa = this.props.match.params.id;

        return (
			<Link to={`/aha/empresas/${id_empresa}`} >
				<Button variant="success" type="submit">
						Ver empresa
				</Button>
			</Link>
        );
	}

	detalle(id_oferta) {
        return (
            <td>
                <Link to={`/aha/oferta/${id_oferta}/detalle`}>
                    <Button variant="primary" type="submit">
                        Detalle
                    </Button>
                </Link>
            </td>
        );
    }

    recomendaciones(oferta) {
        return (
            <td>
                    <Button variant="primary" type="submit">
                        Rec.
                    </Button>
            </td>
        )
    }

	printOfertas() {
		if(this.state.charged){
            return (
                <React.Fragment>
					<table className={styles.table}>
                        <thead>
							<tr>
								<th>Nombre </th>
								<th>Descripción</th>
                                <th>Detalle</th>
                                <th>Recomendaciones</th>
							</tr>
						</thead>
                        <tbody>
							{this.state.ofertasPage.ofertas.map(oferta => {
								return (
									<tr key={oferta.id}>
										<td> {oferta.name} </td>
                                        <td> {oferta.description} </td>
										{this.detalle(oferta.id)}
                                        {this.recomendaciones(oferta)}
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
		if(this.state.ofertas != null || this.state.ofertasPage.ofertas != null){
			return (
				<React.Fragment>
					<Card className="mb-4">
						<Card.Header className="px-2">
							Ofertas
						</Card.Header>
					</Card>    
					<div className={styles.app}>
						{this.empresa()}
						<div className={styles.pagination}>
							{this.state.pageNumbers.map(number => {
									
								//Evalúa si el numero recorrido es la pagina actual para señalar como activa
								let classes = this.state.currentPage === number ? styles.active : '';
								return (
									<span key={number} className={classes} onClick={() => this.cambiaPagina(number)}>{number+" "}</span>
								)
							})}
						</div>
						{this.printOfertas()}
					</div>
				</React.Fragment>
			);
		}
	}
}

export default ListarOfertas;