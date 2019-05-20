import React from 'react';

const DatosPersonalesForm = (props) => {
    if (props.etapaActual !== 2) {
      return null
    } 
    return(
      <React.Fragment>
        <h3>Datos personales</h3> 
        <div className="form-group">
          <label htmlFor="primerNombre">PRIMER NOMBRE</label>
          <input
            className="form-control"
            id="primerNombre"
            name="primerNombre"
            type="text"
            placeholder="Ejemplo: Juan"
            value={props.primerNombre}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="segundoNombre">SEGUNDO NOMBRE</label>
          <input
            className="form-control"
            id="segundoNombre"
            name="segundoNombre"
            type="text"
            placeholder="Ejemplo: Andrés"
            value={props.segundoNombre}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="primerApellido">PRIMER APELLIDO</label>
          <input
            className="form-control"
            id="primerApellido"
            name="primerApellido"
            type="text"
            placeholder="Ejemplo: Pérez"
            value={props.primerApellido}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="segundoApellido">SEGUNDO APELLIDO</label>
          <input
            className="form-control"
            id="segundoApellido"
            name="segundoApellido"
            type="text"
            placeholder="Ejemplo: Rosales"
            value={props.segundoApellido}
            onChange={props.handleChange}
            />
        </div>
      </React.Fragment>
    );
  }

export default DatosPersonalesForm;