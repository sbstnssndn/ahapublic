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
          <ul>
            {this.state.usuarios.map(usuario => {
              return <li key={usuario.user.id}>{usuario.user.firstName} {usuario.user.lastName}: {usuario.percentage}%</li>;
            })}
          </ul>
        </div>
        
      </React.Fragment>
    );
  }

}

export default Recomendaciones;