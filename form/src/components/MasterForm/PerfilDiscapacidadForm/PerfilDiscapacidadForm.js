import React from 'react';

const PerfilDiscapacidadForm = (props) => {
    if (props.etapaActual !== 4) {
      return null
    } 
    return(
      <React.Fragment>
        <h3>Perfil laboral</h3>
        <div className="form-group">
          <label htmlFor="credencial">¿TIENE CREDENCIAL DE DISCAPACIDAD?</label>
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
          <label htmlFor="nivelEducacional">NIVEL EDUCACIONAL</label>
          <select
            className="form-control"
            id="nivelEducacional"
            name="nivelEducacional"
            value={props.nivelEducacional}
            onChange={props.handleChange}
            >
            <option value="" disabled selected>Seleccione</option>
            <option value="true">EDUCACIÓN BÁSICA INCOMPLETA</option>
            <option value="false">EDUCACIÓN BÁSICA COMPLETA</option>
            <option value="true">EDUCACIÓN MEDIA INCOMPLETA</option>
            <option value="false">EDUCACIÓN MEDIA COMPLETA</option>
            <option value="false">TÉCNICA INCOMPLETA</option>
            <option value="false">TÉCNICA COMPLETA</option>
            <option value="false">PROFESIONAL INCOMPLETA</option>
            <option value="false">PROFESIONAL COMPLETA</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="profesionOficio">PROFESIÓN/OFICIO</label>
          <select
            className="form-control"
            id="profesionOficio"
            name="profesionOficio"
            value={props.profesionOficio}
            onChange={props.handleChange}
            >
            <option value="" disabled selected>Seleccione</option>
            <option value="ingeco">Ingeniería Comercial</option>
            <option value="licing">Licenciatura en Inglés</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="areaExperiencia">EXPERIENCIA LABORAL</label>
          <select
            className="form-control"
            id="areaExperiencia"
            name="areaExperiencia"
            value={props.areaExperiencia}
            onChange={props.handleChange}
            >
            <option value="" disabled selected>Área</option>
            <option value="ingeco">FINANZAS</option>
            <option value="licing">INFORMÁTICA</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="anosExperiencia">AÑOS DE EXPERIENCIA</label>
          <select
            className="form-control"
            id="anosExperiencia"
            name="anosExperiencia"
            value={props.anosExperiencia}
            onChange={props.handleChange}
            >
            <option value="" disabled selected>Seleccione</option>
            <option value="0">SIN EXPERIENCIA</option>
            <option value="1">MENOS DE 1 AÑO</option>
            <option value="2">ENTRE 1 Y 2 AÑOS</option>
            <option value="3">MÁS DE 2 AÑOS</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="anosExperiencia">CURSOS</label>
          <select
            className="form-control"
            id="anosExperiencia"
            name="anosExperiencia"
            value={props.anosExperiencia}
            onChange={props.handleChange}
            >
            <option value="" disabled selected>Seleccione</option>
            <option value="0">SIN EXPERIENCIA</option>
            <option value="1">MENOS DE 1 AÑO</option>
            <option value="2">ENTRE 1 Y 2 AÑOS</option>
            <option value="3">MÁS DE 2 AÑOS</option>
          </select>
        </div>
        <button className="btn btn-success btn-block">Guardar datos</button>
        <br />
      </React.Fragment>
    );
  };

  export default PerfilDiscapacidadForm;