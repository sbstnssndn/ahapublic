import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ExperienciaLaboralForm extends Component {

	state = {
		numberOfExperiences: 0
	}

	render () {

		let formqty = 0;
		let experiencias = [];
		for(let i=0; i<this.props.elements.length; i=i+4) {

			experiencias.push({
				id: this.props.field + "_" + i,
				field1: this.props.elements[i],
				field2: this.props.elements[i+1],
				field3: this.props.elements[i+2],
				field4: this.props.elements[i+3]
			})
			formqty++;
		
		}

		return (
			<React.Fragment>
				{ experiencias.map(experiencia => ( 
					<React.Fragment key={experiencia.id}>

						{console.log(formqty)}

						<Form.Group controlId={experiencia.field1.elementConfig.id}>
							<Form.Label>{experiencia.field1.label}</Form.Label>
							<Form.Control placeholder={experiencia.field1.elementConfig.placeholder} />
						</Form.Group>

						<Form.Row>
							<Form.Group as={Col} controlId={experiencia.field2.elementConfig.id}>
								<Form.Label>{experiencia.field2.label}</Form.Label>
								<Form.Control
									as="select"
									onChange={(event) => this.props.handleChange(event, this.props.field, experiencia.field2.elementConfig.id)}
									name={experiencia.field2.elementConfig.name}
									value={experiencia.field2.value}
								>
									{experiencia.field2.elementConfig.options.map(option => (
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

							<Form.Group as={Col} controlId={experiencia.field3.elementConfig.id}>
								<Form.Label>{experiencia.field3.label}</Form.Label>
								<Form.Control
									as="select"
									onChange={(event) => this.props.handleChange(event, this.props.field, experiencia.field3.elementConfig.id)}
									name={experiencia.field3.elementConfig.name}
									value={experiencia.field3.value}
								>
									{experiencia.field3.elementConfig.options.map(option => (
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

							<Form.Group as={Col} controlId={experiencia.field4.elementConfig.id}>
								<Form.Label>{experiencia.field4.label}</Form.Label>
								<Form.Control
									as="select"
									onChange={(event) => this.props.handleChange(event, this.props.field, experiencia.field4.elementConfig.id)}
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
			<Button onClick={() => this.props.addExperiencia(this.props.field)}>Agregar</Button>
			</React.Fragment>
		)
	}
}

export default ExperienciaLaboralForm;