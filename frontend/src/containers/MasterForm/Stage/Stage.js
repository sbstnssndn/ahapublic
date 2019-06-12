import React from 'react';
import Input from './../Input/Input';
import ExperienciaLaboralForm from '../../../components/ExperienciaLaboralForm/ExperienciaLaboralForm';

const Stage = (props) => {
  // Si el paso actual no es el id de esta etapa, no mostrar
  if (props.currentStage !== props.id) {
    return null;
	}

	let fieldElementsArray = [];
	for (let field in props.stageFields) {
		fieldElementsArray.push({
			id: field,
			type: props.stageFields[field].type,
			elements: props.stageFields[field].elements
		})
	}

	
	let inputElementsArray = (
		fieldElementsArray.map(field => {

			if (field.type === 'normal') {
				return field.elements.map(element => (
					<Input
						key={field.id}
						type={field.type}
						label={element.label}
						elementType={element.elementType}
						elementConfig={element.elementConfig}
						value={element.value}
						handleChange={(event) => props.handleChange(event, field.id, element.elementConfig.id)}
					/>
				))
			} else {
				return <ExperienciaLaboralForm
						key={field.id}
						field={field.id}
						type={field.type}
						elements={field.elements}
						handleChange={props.handleChange}
					/>
			}
		})
	)

  return (
    <React.Fragment>
      { inputElementsArray }
    </React.Fragment>
  );
}

export default Stage;