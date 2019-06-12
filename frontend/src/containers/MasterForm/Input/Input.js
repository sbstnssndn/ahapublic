import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Input = (props) => {

  let inputElement = null;

	if (props.type === 'normal') {
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
			case ('money'):
					inputElement = (
						<React.Fragment>
							<label>{props.label}</label>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text">$</span>
								</div>
								<input 
									onChange={props.handleChange}
									{...props.elementConfig}
									value={props.value}
									className="form-control"
									aria-label="cantidad"
								/>
						</div>
						</React.Fragment>
					);
					break;
				case ('date'):
					inputElement = (
						<div className="form-group">
							<label>{props.label}</label>
							<br></br>
							<DatePicker
								name={props.elementConfig.name}
								id={props.elementConfig.id}
								selected={new Date()}
								onChange={props.handleChange}
								dateFormat="dd/MM/yyyy"
								showYearDropdown
								showMonthDropdown
							/>
						</div>
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
	} 

  return (
    <div>
      {inputElement}
    </div>
  );
}

export default Input;