import React from 'react';

const Input = (props) => {

  let inputElement = null;

  switch ( props.elementType ) {
    case ('input'):
      inputElement = <input 
        onChange={props.handleChange}
        {...props.elementConfig}
        value={props.value}
        className="form-control"
      />;
      break;
    case ('textarea'):
      inputElement = <textarea
        onChange={props.handleChange}
        {...props.elementConfig}
        value={props.value}
        className="form-control"
      />;
      break;
    case ('select'):
      inputElement = (
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
      );
      break;
    default:
      inputElement = <input
        onChange={props.handleChange}
        {...props.elementConfig}
        value={props.value}
        className="form-control"
      />
  }

  return (
    <div>
      {inputElement}
    </div>
  );
}

export default Input;