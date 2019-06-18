import React, { Component } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class ListarOfertas extends Component {

  state = {
    ofertas: []
  }

  componentDidMount () {

    axios.get('http://localhost:8080/api/oferta')
    .then(response => {
        console.log(response);
        this.setState({
          ofertas: response.data
        });
      }).catch(error => {
        console.log(error);
      });

  }

  render () {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="tp-2">Ofertas</h1>
            {this.state.ofertas.map(oferta => {
              return (
                <div className="card" style={{width: "100%", marginBottom: "20px"}} key={oferta.id}>
                  <div className="card-body">
                    <h5 className="card-title text-uppercase">{oferta.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Líder</h6>
                    <p className="card-text">Descripción: {oferta.description}</p>
                  </div>
                </div>
              );
            })}
          
        </div>
        
      </React.Fragment>
    );
  }

}

export default ListarOfertas;