import React from 'react';

const DatosLoginForm = (props) => {
  if (props.etapaActual !== 1) {
    return null;
  } 
  return(
    <form>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="nombre@email.com"
          value={props.email}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
    </form>
  );
};

export default DatosLoginForm;