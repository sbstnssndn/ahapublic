import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ExperienciaLaboralForm = (props) => {

		let formqty = 0;
		let experiencias = [];
		for(let i=0; i<props.elements.length; i=i+4) {

			experiencias.push({
				id: props.field + "_" + i,
				field1: props.elements[i],
				field2: props.elements[i+1],
				field3: props.elements[i+2],
				field4: props.elements[i+3]
			})
			formqty++;
		
		}

		let mensaje = null;
		if (props.elements.length === 0) {
			mensaje = <p>Agrega los cargos que hayas ocupado.</p>
		} else {
			mensaje = null;
		}

		return (
			<React.Fragment>
				{ mensaje }
				{ experiencias.map(experiencia => ( 
					<React.Fragment key={experiencia.id}>

						{console.log(formqty)}

						<Form.Group controlId={experiencia.field1.elementConfig.id}>
							<Form.Label>{experiencia.field1.label}</Form.Label>
							<Form.Control
								as={experiencia.field1.elementType}
								type={experiencia.field1.elementConfig.type}
								onChange={(event) => props.handleChange(event, props.field, experiencia.field1.elementConfig.id)}
								placeholder={experiencia.field1.elementConfig.placeholder}
								value={experiencia.field1.value}
								name={experiencia.field1.elementConfig.name}
							/>
						</Form.Group>

						<Form.Row>
							<Form.Group as={Col} controlId={experiencia.field2.elementConfig.id}>
								<Form.Label>{experiencia.field2.label}</Form.Label>
								<Form.Control
									as={experiencia.field2.elementType}
									type={experiencia.field2.elementConfig.type}
									onChange={(event) => props.handleChange(event, props.field, experiencia.field2.elementConfig.id)}
									name={experiencia.field2.elementConfig.name}
									placeholder={experiencia.field2.elementConfig.placeholder}
									value={experiencia.field2.value}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId={experiencia.field3.elementConfig.id}>
								<Form.Label>{experiencia.field3.label}</Form.Label>
								<Form.Control
									as={experiencia.field3.elementType}
									type={experiencia.field3.elementConfig.type}
									onChange={(event) => props.handleChange(event, props.field, experiencia.field3.elementConfig.id)}
									name={experiencia.field3.elementConfig.name}
									placeholder={experiencia.field3.elementConfig.placeholder}
									value={experiencia.field3.value}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId={experiencia.field4.elementConfig.id}>
								<Form.Label>{experiencia.field4.label}</Form.Label>
								<Form.Control
									as={experiencia.field4.elementType}
									onChange={(event) => props.handleChange(event, props.field, experiencia.field4.elementConfig.id)}
									name={experiencia.field4.elementConfig.name}
									value={experiencia.field4.value}
								>
									{experiencia.field4.elementConfig.options.map(option => (
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
						<hr />
					</React.Fragment>
				)) }
			<Button onClick={() => props.addExperiencia(props.field)}>Agregar</Button>
			</React.Fragment>
		)
	
}

export default ExperienciaLaboralForm;