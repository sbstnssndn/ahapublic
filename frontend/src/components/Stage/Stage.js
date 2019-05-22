import React from 'react';
import Input from './../Input/Input';

const Stage = (props) => {
  console.log(props.currentStage);
  console.log(props.id);
  // Si el paso actual no es el id de esta etapa, no mostrar
  if (props.currentStage !== props.id) {
    return null;
  }

  /* Se necesita recorrer el objeto inputs
  *  para crear cada input 
  *  props.inputs = { campo1: {}, campo2: {}, ...}
  */

  const fieldsArray = [];
  for (let key in props.inputs) {
    fieldsArray.push({
      /* crea obj { 
          id: nombreCampo,
          config:{label:'' inputStyle: '', inputConfig: '', value: ''}
         }
      */
      id: key,
      config: props.inputs[key]
    });
  }

  let fields = (
    fieldsArray.map(field => (
      <React.Fragment key={field.id}>
        <label>{field.config.label}</label>
        <Input
          inputStyle={field.config.inputStyle}
          inputConfig={field.config.inputConfig}
          value={field.config.value}
          handleChange={props.handleChange}
        />
      </React.Fragment>
    ))
  )

  return (
    fields
  );
}

export default Stage;