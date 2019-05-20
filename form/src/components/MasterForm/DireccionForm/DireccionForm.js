import React from 'react';

const DireccionForm = (props) => {
    if (props.etapaActual !== 3) {
        return null
    } 
    return(
      <React.Fragment>
        <h3>Dirección</h3>
        <div className="form-group">
          <label htmlFor="calle">CALLE</label>
          <input
            className="form-control"
            id="calle"
            name="calle"
            type="text"
            placeholder="Ejemplo: Pajaritos"
            value={props.calle}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="numeroCalle">NÚMERO</label>
          <input
            className="form-control"
            id="numeroCalle"
            name="numeroCalle"
            type="text"
            placeholder="Ejemplo: 755"
            value={props.numeroCalle}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="numeroCasa">CASA/DPTO./BLOCK</label>
          <input
            className="form-control"
            id="numeroCasa"
            name="numeroCasa"
            type="text"
            placeholder="Ejemplo: 207"
            value={props.numeroCasa}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="credencial">REGIÓN</label>
          <select
            className="form-control"
            id="region"
            name="region"
            value={props.region}
            onChange={props.handleChangeDropdown}
            >
            <option value="" disabled selected>Seleccione</option>
            <option value="arica y parinacota">Región de Arica y Parinacota</option>
            <option value="tarapaca">Región de Tarapacá</option>
            <option value="antofagasta">Región de Antofagasta</option>
            <option value="metropolitana">Región Metropolitana</option>
          </select> 
        </div>
        <div className="form-group">
          <label htmlFor="credencial">CIUDAD</label>
          <select
            className="form-control"
            id="ciudad"
            name="ciudad"
            value={props.ciudad}
            onChange={props.handleChangeDropdown}
            >
            <option value="" disabled selected>Seleccione</option>
            <option value="santiago">Santiago</option>
            <option value="valparaiso">Valparaíso</option>
          </select> 
        </div>
        <div className="form-group">
          <label htmlFor="credencial">COMUNA</label>
          <select
            className="form-control"
            id="credencial"
            name="comuna"
            value={props.comuna}
            onChange={props.handleChangeDropdown}
            >
            <option value="" disabled selected>Seleccione</option>
            <option value="santiago">Santiago</option>
            <option value="estacion central">Estación Central</option>
          </select> 
        </div>
      </React.Fragment>
    );
};

export default DireccionForm;