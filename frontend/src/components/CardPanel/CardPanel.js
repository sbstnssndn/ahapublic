import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const CardPanel = (props) => { 

  const fieldsArray = [];
  for (let key in props.inputs) {
    fieldsArray.push({
      /* crea obj { 
          id: nombreCampo,
          config:{label:'' inputStyle: '', inputConfig: '', value: ''}
         }
      */
      id: key, // ej: nombre
      config: props.inputs[key]
    });
  }

  let fields = (
    fieldsArray.map(field => (
      <React.Fragment key={field.id}>
        <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
              <Button variant="primary">Editar</Button>
            </Card.Body>
          </Card>
          </Row>
      </React.Fragment>
    ))
  )

  return (
    <React.Fragment>
      {fields}
    </React.Fragment>
  );
}

export default CardPanel;