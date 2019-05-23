import React, { Component } from 'react';
import axios from 'axios';

class Recomendaciones extends Component {

  state = {
    usuarios: []
  }

  componentDidMount () {
    axios.get('http://localhost:8080/api/recommendation/get?idOferta=2&n=5')
      .then(response => {
        console.log(response);
        this.setState({
          usuarios: response.data
        });
      }).catch(error => {
        console.log(error);
      });
  }

  render () {

    const users = {...this.state.usuarios}
    console.log(users);


    return (
      <React.Fragment>
        <div className="container">
          <h1 className="tp-2">Recomendaciones</h1>
          {/*<li key={usuario.user.id}>
                  <p className="text-uppercase">{usuario.user.firstName} {usuario.user.lastName}: {usuario.percentage}%</p>
    </li>*/}
            {this.state.usuarios.map(usuario => {
              return (
                <div className="card" style={{width: "100%", marginBottom: "20px"}} key={usuario.user.id}>
                  <div className="card-body">
                    <h5 className="card-title text-uppercase">{usuario.user.firstName} {usuario.user.lastName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{usuario.user.email}</h6>
                    <p className="card-text">Porcentaje de compatibilidad: {usuario.percentage}%</p>
                    <a href="#" className="card-link">Perfil</a>
                    <a href="#" className="card-link">Contacto</a>
                  </div>
                </div>
              );
            })}
          
        </div>
        
      </React.Fragment>
    );
  }

}

export default Recomendaciones;