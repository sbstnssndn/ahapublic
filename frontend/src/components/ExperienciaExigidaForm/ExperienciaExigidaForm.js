import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NEW_EXPERIENCIA_EXIGIDA } from '../../constants/subforms';
import "react-datepicker/dist/react-datepicker.css";

const ExperienciaExigidaForm = ( props ) => {

		let experiencias = [];
		for(let i=0; i<props.elements.length; i=i+2) {

			experiencias.push({
				id: props.field + "_" + i,
				field1: props.elements[i],
				field2: props.elements[i+1]
			})
		}

		let mensaje = null;
		if (props.elements.length === 0) {
			mensaje = <p>Agrega la experiencia laboral requerida para la oferta.</p>
		} else {
			mensaje = null;
		}

		

		return (
			<React.Fragment>
				{ mensaje }
				{ experiencias.map(experiencia => ( 
					<React.Fragment key={experiencia.id}>

						<Form.Row>
							<Form.Group controlId={experiencia.field2.elementConfig.id}>
								<Form.Label>{experiencia.field2.label}</Form.Label>
								<Form.Control sm={3}
									as={experiencia.field2.elementType}
									type={experiencia.field2.elementConfig.type}
									onChange={(event) => props.handleChange(event, props.field, experiencia.field2.elementConfig.id, experiencia.field2.elementConfig.type)}
									placeholder={experiencia.field2.elementConfig.placeholder}
									value={experiencia.field2.value}
									name={experiencia.field2.elementConfig.name}
									required
								/>
							</Form.Group>

							<Form.Group as={Col} controlId={experiencia.field1.elementConfig.id}>
								<Form.Label>{experiencia.field1.label}</Form.Label>
								<Form.Control
									as={experiencia.field1.elementType}
									onChange={(event) => props.handleChange(event, props.field, experiencia.field1.elementConfig.id, experiencia.field1.elementConfig.type)}
									name={experiencia.field1.elementConfig.name}
									value={experiencia.field1.value}
									required
								>
									{experiencia.field1.elementConfig.options.map(option => (
										<option
											key={option.value}
											value={option.value}
											disabled={option.disabled}
										>
											{option.displayValue}
										</option>
									))}
								</Form.Control>
							</Form.Group>

						</Form.Row>
						<Button variant="danger" onClick={() => props.deleteForm(props.field, experiencia.id[experiencia.id.length-1], 2)}>Eliminar</Button>
						<hr />
					</React.Fragment>
				)) }
			<Button onClick={() => props.addSubForm(props.field, NEW_EXPERIENCIA_EXIGIDA)}>Agregar</Button>
			</React.Fragment>
		)
	
}

export default ExperienciaExigidaForm;