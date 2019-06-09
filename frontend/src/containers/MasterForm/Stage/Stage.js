import React from 'react';
import Input from './../Input/Input';

const Stage = (props) => {
  // Si el paso actual no es el id de esta etapa, no mostrar
  if (props.currentStage !== props.id) {
    return null;
	}
	
	let fieldsArray = [];
	for(let field in props.stageFields) {
		fieldsArray.push({
			id: field,
			config: props.stageFields[field]
		});
	}

	let inputElementsArray = (
		fieldsArray.map(field => (
			<React.Fragment key={field.id}>
				<div className="form-group">
					<label>{field.config.label}</label>
					<Input
						elementType={field.config.elementType}
						elementConfig={field.config.elementConfig}
						value={field.config.value}
						handleChange={(event) => props.handleChange(event, field.id)}
					/>
				</div>
			</React.Fragment>
		))
	)

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      { inputElementsArray }
    </React.Fragment>
  );
}

export default Stage;