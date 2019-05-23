import React from 'react';

const Input = (props) => {

  let inputElement = null;

  switch ( props.inputStyle ) {
    case ('input'):
      inputElement = <input 
        onChange={props.handleChange}
        {...props.inputConfig}
        value={props.value}
        className="form-control"
      />;
      break;
    case ('textarea'):
      inputElement = <textarea
        onChange={props.handleChange}
        {...props.inputConfig}
        value={props.value}
        className="form-control"
      />;
      break;
    case ('select'):
      inputElement = (
        <select 
          onChange={props.handleChange}
          name={props.inputConfig.name}
          id={props.inputConfig.id}
          value={props.value}
          className="form-control"
        >
          {props.inputConfig.options.map(option => (
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
        {...props.inputConfig}
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