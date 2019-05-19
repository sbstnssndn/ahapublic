import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';


const PerfilDiscapacidadForm = (props) => {
    if (props.etapaActual !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="credencial">¿Tiene credencial de discapacidad?</label>
        <select
          className="form-control"
          id="credencial"
          value={props.credencial}
          onChange={props.handleChangeDropdown}
          >
          <option value="Si">Sí</option>
          <option value="No">No </option>
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