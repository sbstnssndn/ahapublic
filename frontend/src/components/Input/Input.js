import React from 'react';
import { Form } from 'react-bootstrap';

const Input = (props) => {

  let inputElement = null;

  switch ( props.inputStyle ) {
    case ('input'):
      inputElement = <Form.Control onChange={props.handleChange} {...props.inputConfig} value={props.value} />;
      break;
    case ('textarea'):
      inputElement = <Form.Control as="textarea" rows="3" onChange={props.handleChange} {...props.inputConfig} value={props.value} />;
      break;
    case ('select'):
      inputElement = (
        <select 
          onChange={props.handleChange}
          name={props.inputConfig.name}
          id={props.inputConfig.id}
          value={props.value}
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
      inputElement = <input onChange={props.handleChange} {...props.inputConfig} value={props.value} />
  }

  return (
    <div>
      <Form.Label>{props.label}</Form.Label>
      {inputElement}
    </div>
  );
}

export default Input;