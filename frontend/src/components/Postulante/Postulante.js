import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

//No se utiliza
class Postulante extends Component {

	state = {
		postulante: []
	}

	componentDidMount () {
        
        let id = this.props.match.params.id;
		axios.get('http://localhost:8080/api/user/'+id)
        	.then(response => {
				this.setState({
					postulante: response.data
                });
            })
            .catch(function(error){
            	console.log(error);
			})
		
	}

	nombre(postulante){
		if(postulante.perfilCandidato != null){
            if(postulante.perfilCandidato.firstName != null 
            && postulante.perfilCandidato.lastName != null){
                
                return ( 
					<label> 
                        {postulante.perfilCandidato.firstName+" "} 
                        {postulante.perfilCandidato.lastName} 
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
					Aún no define su perfil
				</label> 
			);
        }
    }

    datosPersonales(postulante) {
        if(postulante != null){
            if(postulante.perfilCandidato != null){
                return (
                    <React.Fragment>
                        <Card.Text>Rut: {postulante.perfilCandidato.rut}</Card.Text>
                        <Card.Text>Género: {postulante.perfilCandidato.genero}</Card.Text>
                        <Card.Text>Fecha de Nacimiento: {postulante.perfilCandidato.fechaNacimiento}</Card.Text>
                        <Card.Text>Nacionalidad: {postulante.perfilCandidato.nacionalidad}</Card.Text>
                        <Card.Text>Teléfono 1: {postulante.perfilCandidato.telefono1}</Card.Text>
                        <Card.Text>Teléfono 2: {postulante.perfilCandidato.telefono2}</Card.Text>
                        <Card.Text>Correo electrónico: {postulante.perfilCandidato.email2}</Card.Text>
                    </React.Fragment>
                )
            }
            else{
                return (
                    <label>
                        Aún no define su perfil
                    </label>
                )
            }
        }
    }

    ubicacion(postulante){
        if(postulante != null){
            if(postulante.perfilCandidato != null){
                if(postulante.perfilCandidato.direccion != null){
                    return (
                        <React.Fragment>
                            <Card.Text>Región: {postulante.perfilCandidato.direccion.region}</Card.Text>
                            <Card.Text>Comuna: {postulante.perfilCandidato.direccion.comuna}</Card.Text>
                            <Card.Text>Calle: {postulante.perfilCandidato.direccion.calle}</Card.Text>
                        </React.Fragment>
                    )
                }
                else{
                    return (
                        <label>
                            Aún no determina dirección
                        </label>
                    )
                }
            }
            else{
                return (
                    <label>
                        Aún no define su perfil
                    </label>
                )
            }
        }
    }

    evaluaTrueFalse (label, value) {
        /* Muestra detalle de credencial, silla de ruedas y baño adaptado */
        
        if(value === true){
            return (
                <Card.Text>
                    {label}: Sí 
                </Card.Text>
            );
        }
        else {
            return (
                <Card.Text>
                    {label}: No 
                </Card.Text>
            );
        }
    }

    discapacidad(postulante){
        if(postulante != null){
            if(postulante.perfilCandidato != null){
                if(postulante.perfilCandidato.perfilLaboral != null){
                    return (
                        <React.Fragment>
                            {this.evaluaTrueFalse("Posee credencia de discapacidad", postulante.perfilCandidato.perfilLaboral.credencial)}
                            {this.evaluaTrueFalse("Usa silla de ruedas", postulante.perfilCandidato.perfilLaboral.sillaDeRuedas)}
                            {this.evaluaTrueFalse("Requiere baño adaptado", postulante.perfilCandidato.perfilLaboral.banhoAdaptado)}
                            <Card.Text>Adecuaciones: {postulante.perfilCandidato.perfilLaboral.adecuaciones}</Card.Text>
                            <Card.Text>Discapacidad auditiva: {postulante.perfilCandidato.perfilLaboral.dAuditiva}%</Card.Text>
                            <Card.Text>Discapacidad física: {postulante.perfilCandidato.perfilLaboral.dFisica}%</Card.Text>
                            <Card.Text>Discapacidad intelectual: {postulante.perfilCandidato.perfilLaboral.dIntelectual}%</Card.Text>
                            <Card.Text>Discapacidad psíquica: {postulante.perfilCandidato.perfilLaboral.dPsiquica}%</Card.Text>
                            <Card.Text>Discapacidad visual: {postulante.perfilCandidato.perfilLaboral.dVisual}%</Card.Text>
                        </React.Fragment>                    
                    )
                }
                else{
                    return (
                        <label>
                            Aún no determina perfil laboral
                        </label>
                    )
                }
            }
            else{
                return (
                    <label>
                        Aún no define su perfil
                    </label>
                )
            }
        }
    }

    evaluaCampos (label, value) {
        /* Muestra detalle de las exigencias físicas */
        let resultado = "";
        
        if(value === 0){
            resultado = "No, o muy poco tiempo";
        }
        else if(value === 1){
            resultado = "Esporádicamente (Hasta un 20% de la jornada laboral)";
        }
        else if(value === 2){
            resultado = "Entre un 20% y 70% de la jornada laboral";
        }
        else if(value === 3){
            resultado = "La mayor parte del tiempo";
        }
        return (
            <Card.Text>
                {label}{resultado}
            </Card.Text>
        );
    }

    capacidadFisica(perfilCandidato){
        if(perfilCandidato != null){
            if(perfilCandidato.perfilLaboral != null){
                return (
                    <React.Fragment>
                        {this.evaluaCampos("Permanecer de pie: ",perfilCandidato.perfilLaboral.permanecerPie)}
                        {this.evaluaCampos("Permanecer sentado: ",perfilCandidato.perfilLaboral.permanecerSentado)}
                        {this.evaluaCampos("Desplazar sin ayuda: ",perfilCandidato.perfilLaboral.desplazoTrayectos)}
                        {this.evaluaCampos("Desplazar entre pisos: ",perfilCandidato.perfilLaboral.diferentesPisos)}
                        {this.evaluaCampos("Acceso a distintas alturas: ",perfilCandidato.perfilLaboral.diferentesAlturas)}
                        {this.evaluaCampos("Manejo de objetos pequeños: ",perfilCandidato.perfilLaboral.objetosPequeños)}
                        {this.evaluaCampos("Manejo de actividades con agudeza visual: ",perfilCandidato.perfilLaboral.actividadesVisual)}
                        {this.evaluaCampos("Manejo de actividades con agudeza auditiva: ",perfilCandidato.perfilLaboral.actividadesAuditiva)}
                        {this.evaluaCampos("Comunicación de manera oral: ",perfilCandidato.perfilLaboral.comunicacionOral)}
                        {this.evaluaCampos("Capacidad de leer y escribir: ",perfilCandidato.perfilLaboral.leerEscribir)}
                        {this.evaluaCampos("Acomodación a situaciones nuevas: ",perfilCandidato.perfilLaboral.situacionesNuevas)}
                        {this.evaluaCampos("Acomodación a trabajos en equipo: ",perfilCandidato.perfilLaboral.trabajoEquipo)}
                        {this.evaluaCampos("Adaptación a situaciones conflictivas: ",perfilCandidato.perfilLaboral.situacionesConflicto)}
                        {this.evaluaCampos("Resolución de problemas: ",perfilCandidato.perfilLaboral.resolverProblemas)}
                        {this.evaluaCampos("Adaptación a tareas estresantes: ",perfilCandidato.perfilLaboral.tareasEstresantes)}
                    </React.Fragment>
                )
            }
            else{
                return (
                    <label>
                        Aún no determina perfil laboral
                    </label>
                )
            }
        }
        else{
            return (
                <label>
                    Aún no define su perfil
                </label>
            )
        }
    }

	render () {
        if(this.state.postulante != null){
            return (
                <React.Fragment>
                    <Card className="mb-4">
                        <Card.Header className="px-2">
                            Postulante: {this.nombre(this.state.postulante)}
                        </Card.Header>

                        <Card.Body>
                            <Form.Group>
                                
                                <Card.Subtitle> Datos Personales </Card.Subtitle>
                                {this.datosPersonales(this.state.postulante)}

                                <hr></hr>
                            </Form.Group>

                            <Form.Group>
                                <Card.Subtitle> Ubicación </Card.Subtitle>
                                {this.ubicacion(this.state.postulante)}

                                <hr></hr>
                            </Form.Group>

                            <Form.Group>
                                <Card.Subtitle>Discapacidad</Card.Subtitle>
                                {this.discapacidad(this.state.postulante)}

                                <hr></hr>
                            </Form.Group>

                            <Form.Group>
                                <Card.Subtitle> Capacidad Física </Card.Subtitle>
                                {this.capacidadFisica(this.state.postulante.perfilCandidato)}
                                <hr></hr>
                            </Form.Group>

                        </Card.Body>
                    </Card>
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                    <Card className="mb-4">
                        <Card.Header className="px-2">
                            Postulante no encontrado
                        </Card.Header>
                    </Card>
                </React.Fragment>
            )
        }
	}
}

export default Postulante;