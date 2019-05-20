import React from 'react';

const DatosLoginForm = (props) => {
  if (props.etapaActual !== 1) {
    return null;
  } 
  return(
    <React.Fragment>
      <h3>Datos de ingreso</h3> 
      <div className="form-group">
        <label htmlFor="email">CORREO ELECTRÓNICO</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="nombre@email.com"
          value={props.email}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">CONTRASEÑA</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
    </React.Fragment>
  );
};

export default DatosLoginForm;