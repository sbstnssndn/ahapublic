import React from 'react';

const PerfilDiscapacidadForm = (props) => {
    if (props.etapaActual !== 4) {
      return null
    } 
    return(
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="credencial">¿Tiene credencial de discapacidad?</label>
          <select
            className="form-control"
            id="credencial"
            name="credencial"
            value={props.credencial}
            onChange={props.handleChange}
            >
            <option value="true">Sí</option>
            <option value="false">No </option>
          </select> 
        </div>
        <div className="form-group">
          <label htmlFor="credencial">Pregunta</label>
          <input
            className="form-control"
            id="pregunta"
            name="pregunta"
            type="pregunta"
            placeholder="Pregunta genérica"
            value={props.password}
            onChange={props.handleChange}
            />      
        </div>
        <button className="btn btn-success btn-block">Guardar datos</button>
        <br />
      </React.Fragment>
    );
  };

  export default PerfilDiscapacidadForm;