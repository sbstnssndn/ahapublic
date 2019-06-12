import React from 'react';
import ExperienciaLaboralForm from '../../../components/ExperienciaLaboralForm/ExperienciaLaboralForm';

const Input = (props) => {

  let inputElement = null;

  switch ( props.elementType ) {
    case ('input'):
      inputElement = (
				<div className="form-group">
					<label>{props.label}</label>
					<input 
						onChange={props.handleChange}
						{...props.elementConfig}
						value={props.value}
						className="form-control"
					/>
				</div>
			);
      break;
    case ('textarea'):
      inputElement = (
				<div className="form-group">
					<label>{props.label}</label>
					<textarea
						onChange={props.handleChange}
						{...props.elementConfig}
						value={props.value}
						className="form-control"
					/>
				</div>
			);
      break;
    case ('select'):
      inputElement = (
				<div className="form-group">
					<label>{props.label}</label>
					<select 
						onChange={props.handleChange}
						name={props.elementConfig.name}
						id={props.elementConfig.id}
						value={props.value}
						className="form-control"
					>
						{props.elementConfig.options.map(option => (
							<option
								key={option.value}
								value={option.value}
								disabled={option.disabled}
							>
								{option.displayValue}
							</option>
						))}
					</select>
				</div>
      );
			break;
		case ('experiencia_laboral'):
			inputElement = (
				<ExperienciaLaboralForm
					elementConfig={props.elementConfig}
					value={props.value}
					label={props.label}
					onChange={props.handleChange}
				/>
			);
			break;
    default:
      inputElement = (
				<div className="form-group">
					<label>{props.label}</label>
					<input
						onChange={props.handleChange}
						{...props.elementConfig}
						value={props.value}
						className="form-control"
					/>
				</div>
			);
  }

  return (
    <div>
      {inputElement}
    </div>
  );
}

export default Input;