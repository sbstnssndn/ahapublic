import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class ExperienciaLaboralForm extends Component {

	state = {
		numberOfExperiences: 0
	}

	render () {

		

		return (
			<Form.Row>
				<Form.Group as={Col} controlId={this.props.elements[0].elementConfig.id}>
					<Form.Label>{this.props.elements[0].label}</Form.Label>
					<Form.Control
						as="select"
						onChange={(event) => this.props.handleChange(event, this.props.field, this.props.elements[0].elementConfig.id)}
						name={this.props.elements[0].elementConfig.name}
						value={this.props.elements[0].value}
					>
						{this.props.elements[0].elementConfig.options.map(option => (
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

				<Form.Group as={Col} controlId={this.props.elements[1].elementConfig.id}>
					<Form.Label>{this.props.elements[1].label}</Form.Label>
					<Form.Control
						as="select"
						onChange={(event) => this.props.handleChange(event, this.props.field, this.props.elements[1].elementConfig.id)}
						name={this.props.elements[1].elementConfig.name}
						value={this.props.elements[1].value}
					>
						{this.props.elements[1].elementConfig.options.map(option => (
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

				<Form.Group as={Col} controlId={this.props.elements[2].elementConfig.id}>
					<Form.Label>{this.props.elements[2].label}</Form.Label>
					<Form.Control
						as="select"
						onChange={(event) => this.props.handleChange(event, this.props.field, this.props.elements[2].elementConfig.id)}
						name={this.props.elements[2].elementConfig.name}
						value={this.props.elements[2].value}
					>
						{this.props.elements[2].elementConfig.options.map(option => (
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
		)
	}
}

export default ExperienciaLaboralForm;