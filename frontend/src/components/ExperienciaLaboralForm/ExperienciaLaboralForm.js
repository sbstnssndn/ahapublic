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
				<Form.Group as={Col} controlId={this.props.elementConfig.id}>
					<Form.Label>{this.props.label}</Form.Label>
					<Form.Control
						as="select"
						onChange={this.props.onChange}
						name={this.props.elementConfig.name}
						value={this.props.value}
					>
						{this.props.elementConfig.options.map(option => (
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

				<Form.Group as={Col} controlId={this.props.elementConfig.id}>
					<Form.Label>{this.props.label}</Form.Label>
					<Form.Control
						as="select"
						onChange={this.props.onChange}
						name={this.props.elementConfig.name}
						value={this.props.value}
					>
						{this.props.elementConfig.options.map(option => (
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

				<Form.Group>
					<Form.Label>{this.props.label}</Form.Label>
					<Form.Control
						placeholder="Operador telefónico"
						onChange={this.props.handleChange}
						{...this.props.elementConfig}
					/>
				</Form.Group>
			</Form.Row>
		)
	}
}

export default ExperienciaLaboralForm;