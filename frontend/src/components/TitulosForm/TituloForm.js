import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TituloForm = ( props ) => {

    let titulos = [];
    for(let i=0; i<props.elements.length; i=i+3) {

        titulos.push({
            id: props.field + "_" + i,
            field1: props.elements[i],
            field2: props.elements[i+1],
            field3: props.elements[i+2]
        })
    }

    let mensaje = null;
	if (props.elements.length === 0) {
		mensaje = <p>Añada los títulos que posea.</p>
    } 
    else {
		mensaje = null;
	}

    return (

        <React.Fragment>
            {mensaje}
            {
                titulos.map(
                    titulo => ( 
                        <React.Fragment key={titulo.id}>
                            
                            <Form.Group controlId={titulo.field1.elementConfig.id}>
							    <Form.Label>{titulo.field1.label}</Form.Label>
                                <Form.Control
                                    as={titulo.field1.elementType}
                                    type={titulo.field1.elementConfig.type}
                                    onChange={(event) => props.handleChange(event, props.field, titulo.field1.elementConfig.id, titulo.field1.elementConfig.type)}
                                    placeholder={titulo.field1.elementConfig.placeholder}
                                    value={titulo.field1.value}
                                    name={titulo.field1.elementConfig.name}
                                    required
                                />
						    </Form.Group>

                            <Form.Row>
                                
                                <Form.Group as={Col} xs="9" controlId={titulo.field2.elementConfig.id}>
                                    <Form.Label>{titulo.field2.label}</Form.Label>
                                    <Form.Control
                                        as={titulo.field2.elementType}
                                        type={titulo.field2.elementConfig.type}
                                        onChange={(event) => props.handleChange(event, props.field, titulo.field2.elementConfig.id, titulo.field2.elementConfig.type)}
                                        placeholder={titulo.field2.elementConfig.placeholder}
                                        value={titulo.field2.value}
                                        name={titulo.field2.elementConfig.name}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group as ={Col} xs="3" controlId={titulo.field2.elementConfig.id}>
                                <Form.Label>{titulo.field3.label}</Form.Label>
                                    <Form.Control
                                        as={titulo.field3.elementType}
                                        type={titulo.field3.elementConfig.type}
                                        onChange={(event) => props.handleChange(event, props.field, titulo.field3.elementConfig.id, titulo.field3.elementConfig.type)}
                                        placeholder={titulo.field3.elementConfig.placeholder}
                                        value={titulo.field3.value}
                                        name={titulo.field3.elementConfig.name}
                                        required
                                    />
                                </Form.Group>

                            </Form.Row>
                            <hr/>
                        </React.Fragment>
                    )
                )
            }
            <Button onClick={() => props.addTitulo(props.field)}>Agregar</Button>
        </React.Fragment>
    )

}

export default TituloForm;