import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import {
	Link,
	Route
} from "react-router-dom";

class DetalleOferta extends Component {

	state = {
        oferta: [],
        empresa: []
	}

	componentDidMount () {
        
        let id_oferta = this.props.match.params.id;
		axios.get('http://localhost:8080/api/oferta/'+id_oferta)
        	.then(response => {
				this.setState({
                    oferta: response.data
                });
                axios.get('http://localhost:8080/api/oferta/'+id_oferta+'/user')
                    .then(response => {
                        this.setState({
                            empresa: response.data
                        });
                        console.log(this.state.empresa);
                    });
            })
            .catch(function(error){
            	console.log(error);
			})	
    }

    botones () {
        if(this.state.oferta != null){
            return (
                <Row>
					<Col>
						<Link to={`/aha/empresas/${this.state.empresa.id}`} >
							<Button variant="success" type="submit">
								Ver empresa
							</Button>
						</Link>						
					</Col>
                </Row>
            );
        }
    }

    evaluaTrueFalse (label, value) {
        /* Muestra detalle de silla de ruedas y baño adaptado */
        if(this.state.oferta != null){
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
    }

    evaluaCampos (label, value) {
        /* Muestra detalle de las exigencias físicas */
        let resultado = "";
        if(this.state.oferta != null){
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
    }

    licencia (label, value){
        if(this.state.oferta != null){
            return (
                <Card.Text>
                    {label}{value}
                </Card.Text>
            )
        }
    }

    educacion (label, value){
        if(this.state.oferta != null){
            
            let niveles = [
                "Educación Especial",
                "Ed. Básica Incompleta",
                "Ed. Básica Completa",
                "Ed. Media Incompleta",
                "Ed. Media Completa",
                "Ed. Media Técnica-Profesional Incompleta",
                "Ed. Media Técnica-Profesional Completa",
                "Ed. Superior Profesional Incompleta",
                "Ed. Superior Profesional Completa",
                "Postgrado"
            ];

            return (
                <Card.Text>
                    {label}{niveles[value]}
                </Card.Text>
            )
        }
    }

    disponibilidad (label, value){
        if(this.state.oferta != null){

            let dias = [
                "Lunes a Viernes",
                "Sábados, Domingos y festivos",
                "Cualquier día"
            ];
            return (
                <Card.Text>
                    {label}{dias[value]}
                </Card.Text>
            )
        }
    }

    renta (label, value){
        if(this.state.oferta != null){

            let rentas = [
                "Hasta 301.000",
                "301.0001 a 400.000",
                "400.001 a 550.000",
                "550.001 a 650.000",
                "650.001 a 800.000",
                "800.001 a 1.000.000",
                "1.000.001 o más"
            ];
            return (
                <Card.Text>
                    {label}{rentas[value]}
                </Card.Text>
            )
        }
    }

    experiencias (){
        if(this.state.oferta != null){
            if(this.state.oferta.experiencias != null){
                
                let areas = [
                    "Administración, contabilidad o finanzas",
                    "Aduana y comercio exterior",
                    "Abastecimiento o Logística",
                    "Agrícola o Ganadero",
                    "Auxiliar de Aseo o Servicios de Alimentación",
                    "Atención al Cliente, Call Center o Telemarketing",
                    "Ingeniería Civil y Construcción",
                    "Comercial, Ventas o Negocios",
                    "Comunicación, Relaciones Públicas o Institucionales",
                    "Construcción",
                    "Diseño",
                    "Educación, Docencia o Investigación",
                    "Gastronomía y Turismo",
                    "Gerencia y Dirección General",
                    "Ingenierías",
                    "Legal",
                    "Mantención de áreas verdes o jardinería",
                    "Marketing y Publicidad",
                    "Minería, Petróleo o Gas",
                    "Operaciones",
                    "Producción y Manufactura",
                    "Recursos Humanos o Formación",
                    "Salud, Medicina y Farmacia",
                    "Secretaría y Recepción",
                    "Seguridad o Vigilancia",
                    "Tecnología, Informática, Sistemas",
                    "Textil y Confección",
                    "Transport"
                ];
                
                return(
                    <Card.Text>
                        {this.state.oferta.experiencias.map( experiencia => {
                            return(
                                <React.Fragment>
                                    <Card.Text> Área: {areas[experiencia.area]} </Card.Text>
                                    <Card.Text> Tiempo: {experiencia.duracion} años </Card.Text>
                                </React.Fragment>
                            )
                        })}
                    </Card.Text>
                );
            }
            else{
                return(
                    <Card.Text>
                        Sin definir o no se requiere de experiencias en específico.
                    </Card.Text>
                );
            }
        }
    }

    render() {
        return (
            <React.Fragment>
				<Card className="mb-4">
					<Card.Header className="px-2">
						Oferta: {this.state.oferta.name}
					</Card.Header>
                    <Card.Body>
						
                        <Form.Group>    
                            <Card.Subtitle> Descripción </Card.Subtitle> 
                            {this.state.oferta.description}
                            <hr></hr>
                        </Form.Group>
                        
                        <Form.Group>
                            <Card.Subtitle> Accesibilidad </Card.Subtitle>
                            {this.evaluaTrueFalse("Posee acceso para silla de ruedas", this.state.oferta.sillaDeRuedas)}
                            {this.evaluaTrueFalse("Posee baño adaptado", this.state.oferta.bañoAdaptado)}
                            <hr></hr>
							{/*this.botones()*/}
						</Form.Group>

                        <Form.Group>
                            <Card.Subtitle> Exigencia Física </Card.Subtitle>
                            {this.evaluaCampos("Permanecer de pie: ",this.state.oferta.permanecerPie)}
                            {this.evaluaCampos("Permanecer sentado: ",this.state.oferta.permanecerSentado)}
                            {this.evaluaCampos("Desplazar sin ayuda: ",this.state.oferta.desplazoTrayectos)}
                            {this.evaluaCampos("Desplazar entre pisos: ",this.state.oferta.diferentesPisos)}
                            {this.evaluaCampos("Acceso a distintas alturas: ",this.state.oferta.diferentesAlturas)}
                            {this.evaluaCampos("Manejo de objetos pequeños: ",this.state.oferta.objetosPequeños)}
                            {this.evaluaCampos("Manejo de actividades con agudeza visual: ",this.state.oferta.actividadesVisual)}
                            {this.evaluaCampos("Manejo de actividades con agudeza auditiva: ",this.state.oferta.actividadesAuditiva)}
                            {this.evaluaCampos("Comunicación de manera oral: ",this.state.oferta.comunicacionOral)}
                            {this.evaluaCampos("Capacidad de leer y escribir: ",this.state.oferta.leerEscribir)}
                            {this.evaluaCampos("Acomodación a situaciones nuevas: ",this.state.oferta.situacionesNuevas)}
                            {this.evaluaCampos("Acomodación a trabajos en equipo: ",this.state.oferta.trabajoEquipo)}
                            {this.evaluaCampos("Adaptación a situaciones conflictivas: ",this.state.oferta.situacionesConflicto)}
                            {this.evaluaCampos("Resolución de problemas: ",this.state.oferta.resolverProblemas)}
                            {this.evaluaCampos("Adaptación a tareas estresantes: ",this.state.oferta.tareasEstresantes)}
                            <hr></hr>

                        </Form.Group>

                        <Form.Group>
                            <Card.Subtitle> Exigencia Laboral </Card.Subtitle>
                            {this.licencia("Licencia requerida: ", this.state.oferta.licencia)}
                            {this.educacion("Nivel educacional mínimo: ", this.state.oferta.nivelEducacional)}
                            {this.disponibilidad("Disponibilidad requerida: ", this.state.oferta.disponibilidad)}
                            {this.renta("Renta estimada: ", this.state.oferta.rentaEstimada)}
                            <hr></hr>
                        </Form.Group>

                        <Form.Group>
                            <Card.Subtitle> Experiencia requerida </Card.Subtitle>
                            {this.experiencias()}
                        </Form.Group>

					</Card.Body>
				</Card>
			</React.Fragment>
        );
    }
}

export default DetalleOferta;