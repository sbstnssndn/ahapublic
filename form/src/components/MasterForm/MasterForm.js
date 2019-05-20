import React, {Component} from 'react';
import DatosPersonalesForm from './DatosPersonalesForm/DatosPersonalesForm';
import DatosLoginForm from './DatosLoginForm/DatosLoginForm';
import PerfilDiscapacidadForm from './PerfilDiscapacidadForm/PerfilDiscapacidadForm';
import DireccionForm from './DireccionForm/DireccionForm';

class MasterForm extends Component {

    state = {
      etapaActual: 1,
      email:  '',
      password: '',
      primerNombre: '',
      segundoNombre: '',
      credencial: false
    }

    handleChangeDropdown = event => {
      this.setState({
        credencial: event.target.value
      });
    }
    
    handleChange = event => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
    }

     
    handleSubmit = event => {
      event.preventDefault();
      const { email, nombre, password, credencial } = this.state;
      alert(`Tus datos son: \n 
             Email: ${email} \n 
             Nombre: ${nombre} \n
             Credencial: ${credencial} \n
             Password: ${password}`);
    }
    
    siguiente = () => {
      let etapaActual = this.state.etapaActual;

      etapaActual = etapaActual >= 3? 4: etapaActual + 1;
      this.setState({
        etapaActual: etapaActual
      });
    }
      
    anterior = () => {
      let etapaActual = this.state.etapaActual
      etapaActual = etapaActual <= 1? 1: etapaActual - 1
      this.setState({
        etapaActual: etapaActual
      })
    }
  
    /*
    * funciones de los botones anterior-siguiente
    */
    botonAnterior() {
      let etapaActual = this.state.etapaActual;
      if(etapaActual !== 1){
        return (
          <button 
            className="btn btn-secondary" 
            type="button" onClick={this.anterior}>
          Volver
          </button>
        );
      }
      return null;
    }
    
    botonSiguiente(){
      let etapaActual = this.state.etapaActual;
      if(etapaActual < 4){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this.siguiente}>
          Siguiente
          </button>        
        );
      }
      return null;
    }
    
    render() {    
      return (
        <React.Fragment>
          <h1>Registro postulante</h1>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <DatosLoginForm 
              etapaActual={this.state.etapaActual} 
              handleChange={this.handleChange}
              email={this.state.email}
              password={this.state.password}
            />
            <DatosPersonalesForm 
              etapaActual={this.state.etapaActual} 
              handleChange={this.handleChange}
              nombre={this.state.nombre}
            />
            <DireccionForm 
              etapaActual={this.state.etapaActual} 
              handleChange={this.handleChange}
              nombre={this.state.nombre}
            />
            <PerfilDiscapacidadForm 
              etapaActual={this.state.etapaActual} 
              handleChange={this.handleChange}
              handleChangeDropdown={this.handleChangeDropdown}
              credencial={this.state.credencial}
            />
            { this.botonAnterior() }
            { this.botonSiguiente() }
          </form>
        </React.Fragment>
      );
    }
  }

export default MasterForm;