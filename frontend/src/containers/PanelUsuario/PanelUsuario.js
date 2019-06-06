import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck'

class PanelUsuario extends Component {

  render () {
    return (
      <React.Fragment>
        <CardDeck>
          {deck}
        </CardDeck>
      </React.Fragment>
    
    );
  }
}

export default PanelUsuario;