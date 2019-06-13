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
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="tp-2">Ofertas</h1>
            {this.state.ofertas.map(oferta => {
              return (
                <Row>
                  <Col lg={2}>
                  	<Card key={oferta.id}>
                  		<Card.Body>
                  			<Card.Title>{oferta.name}</Card.Title>
                  			<Card.Subtitle className="mb-2 text-muted">{oferta.description}</Card.Subtitle>
                  			<Card.Text>
                  				<h5>Requiere silla de ruedas</h5>
                  				<h6>{oferta.sillaDeRuedas}</h6>
                  				<h5>Requiere baños amplios</h5>
                  				<h6>{oferta.bañoAdaptado}</h6>
                  			</Card.Text>
                  		</Card.Body>
                  	</Card>
                  </Col>
                  <Col lg={2}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Experiencias</Card.Title>
                        <Card.Text>
                          oferta.experiencias.map(experiencia => {
                            <h5>Área: {experiencia.tipo}</h5>
                            <h6>Duración: {experiencia.duracion}</h6>
                          })
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          
        </div>
        
      </React.Fragment>
    );
  }

}

export default ListarOfertas;