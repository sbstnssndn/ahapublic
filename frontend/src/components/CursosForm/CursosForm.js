import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
							as={curso.field1.elementType}
							type={curso.field1.elementConfig.type}
							onChange={(event) => props.handleChange(event, props.field, curso.field1.elementConfig.id)}
							placeholder={curso.field1.elementConfig.placeholder}
							value={curso.field1.value}
							name={curso.field1.elementConfig.name}
						/>
					</Form.Group>

					<Form.Group controlId={curso.field2.elementConfig.id}>
						<Form.Label>{curso.field2.label}</Form.Label>
						<Form.Control
							as={curso.field2.elementType}
							type={curso.field2.elementConfig.type}
							onChange={(event) => props.handleChange(event, props.field, curso.field2.elementConfig.id)}
							name={curso.field2.elementConfig.name}
							placeholder={curso.field2.elementConfig.placeholder}
							value={curso.field2.value}
						/>
					</Form.Group>

					<Form.Row>

						<Form.Group as={Col} controlId={curso.field3.elementConfig.id}>
							<Form.Label>{curso.field3.label}</Form.Label>
							<DatePicker
								className="form-control"
								type={curso.field3.elementConfig.type}
								name={curso.field3.elementConfig.name}
								id={curso.field3.elementConfig.id}
								selected={curso.field3.value}
								maxDate={new Date()}
								dateFormat="dd/MM/yyyy"
								showYearDropdown
								showMonthDropdown
								onChange={(event) => props.handleChange(event, props.field, curso.field3.elementConfig.id, curso.field3.elementConfig.type)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId={curso.field4.elementConfig.id}>
							<Form.Label>{curso.field4.label}</Form.Label>
							<DatePicker
								className="form-control"
								type={curso.field4.elementConfig.type}
								name={curso.field4.elementConfig.name}
								id={curso.field4.elementConfig.id}
								selected={curso.field4.value}
								maxDate={new Date()}
								dateFormat="dd/MM/yyyy"
								showYearDropdown
								showMonthDropdown
								onChange={(event) => props.handleChange(event, props.field, curso.field4.elementConfig.id, curso.field4.elementConfig.type)}
							/>
						</Form.Group>

					</Form.Row>
					<Button variant="danger" onClick={() => props.deleteForm(props.field, curso.id[curso.id.length-1], 4)}>Eliminar</Button>
					<hr />
				</React.Fragment>
			)) }
		<Button onClick={() => props.addCurso(props.field)}>Agregar</Button>
		</React.Fragment>
	)
	
}

export default CursosForm;