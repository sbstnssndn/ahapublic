import React from 'react';

const DatosPersonalesForm = (props) => {
    if (props.etapaActual !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          className="form-control"
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Ingrese su nombre"
          value={props.nombre}
          onChange={props.handleChange}
          />
      </div>
    );
  }

export default DatosPersonalesForm;