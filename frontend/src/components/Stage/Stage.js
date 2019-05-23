import React from 'react';
import Input from './../Input/Input';

const Stage = (props) => {
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
      id: key, // ej: nombre
      config: props.inputs[key]
    });
  }

  let fields = (
    fieldsArray.map(field => (
      <React.Fragment key={field.id}>
        <div className="form-group">
          <label>{field.config.label}</label>
          <Input
            inputStyle={field.config.inputStyle}
            inputConfig={field.config.inputConfig}
            value={field.config.value}
            handleChange={(event) => props.handleChange(event, props.currentStage, field.id)}
          />
        </div>
      </React.Fragment>
    ))
  )

  return (
    <React.Fragment>
      <h2>Etapa actual {props.currentStage+1}/{props.totalStages}: {props.title}</h2>
      {fields}
    </React.Fragment>
  );
}

export default Stage;