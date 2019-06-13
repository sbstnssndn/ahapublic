import React, { Component } from 'react';
import axios from 'axios';

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

  	console.log(ofertas);

    const offers = {...this.state.ofertas}
    console.log(users);


    return (
      <React.Fragment>
        <div className="container">
          <h1 className="tp-2">Ofertas</h1>
            {this.state.ofertas.map(oferta => {
              return (
              	<Card key={oferta.id}>
              		<Card.Body>
              			<Card.Title>{oferta.name}</Card.Title>
              			<Card.Subtitle className="mb-2 text-muted">{oferta.description}</Card.Subtitle>
              			<Card.Text>
              				<h5>Habilitado para silla de ruedas</h5>
              				<h6>{oferta.sillaDeRuedas}</h6>
              				<h5>Tiene baños amplios</h5>
              				<h6>{oferta.bañoAdaptado}</h6>
              			</Card.Text>
              		</Card.Body>
              	</Card>
              );
            })}
          
        </div>
        
      </React.Fragment>
    );
  }

}

export default ListarOfertas;