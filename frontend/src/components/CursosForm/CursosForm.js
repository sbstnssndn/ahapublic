import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CursosForm = (props) => {

		let formqty = 0;
		let cursos = [];
		for(let i=0; i<props.elements.length; i=i+4) {

			cursos.push({
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
			mensaje = <p>Agrega los cursos de formación que hayas realizado.</p>
		} else {
			mensaje = null;
		}

		return (
			<React.Fragment>
				{ mensaje }
				{ cursos.map(curso => ( 
					<React.Fragment key={curso.id}>

						{console.log(formqty)}

						<Form.Group controlId={curso.field1.elementConfig.id}>
							<Form.Label>{curso.field1.label}</Form.Label>
							<Form.Control
								as="input"
								onChange={(event) => props.handleChange(event, props.field, curso.field1.elementConfig.id)}
								placeholder={curso.field1.elementConfig.placeholder}
								value={curso.field1.value}
							/>
						</Form.Group>

						<Form.Group controlId={curso.field2.elementConfig.id}>
							<Form.Label>{curso.field2.label}</Form.Label>
							<Form.Control
								as="input"
								onChange={(event) => props.handleChange(event, props.field, curso.field2.elementConfig.id)}
								placeholder={curso.field2.elementConfig.placeholder}
								value={curso.field2.value}
							/>
						</Form.Group>

						<Form.Row>
							<Col>
								<Form.Group controlId={curso.field3.elementConfig.id}>
									<Form.Label>{curso.field3.label}</Form.Label>
									<Form.Control
										as="input"
										onChange={(event) => props.handleChange(event, props.field, curso.field3.elementConfig.id)}
										placeholder={curso.field3.elementConfig.placeholder}
										value={curso.field3.value}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId={curso.field4.elementConfig.id}>
									<Form.Label>{curso.field4.label}</Form.Label>
									<Form.Control
										as="input"
										onChange={(event) => props.handleChange(event, props.field, curso.field4.elementConfig.id)}
										placeholder={curso.field4.elementConfig.placeholder}
										value={curso.field4.value}
									/>
								</Form.Group>
							</Col>
						</Form.Row>
						<hr />
					</React.Fragment>
				)) }
			<Button onClick={() => props.addCurso(props.field)}>Agregar</Button>
			</React.Fragment>
		)
	
}

export default CursosForm;