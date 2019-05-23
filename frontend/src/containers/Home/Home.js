import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

class Home extends Component {
  
  state = {
    currentStage: 0,
    totalStages: 3,
    stages: []
  }

  render () {
    return (
      <React.Fragment>
        <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide pt-3" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="http://ahainclusion.com/wp-content/uploads/bfi_thumb/dsc072441-o4h95qeh1gomyo7mc3312m2xet8xaewkdoosrqrzfw.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="http://ahainclusion.com/wp-content/uploads/bfi_thumb/059a9785-o4h95qeh1gomyo7mc3312m2xet8xaewkdoosrqrzfw.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="http://ahainclusion.com/wp-content/uploads/bfi_thumb/059a9715-o4h95qeh1gomyo7mc3312m2xet8xaewkdoosrqrzfw.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Siguiente</span>
        </a>
      </div>

      <div className="jumbotron">
        <h1 className="display-4">AHA Inclusión</h1>
        <p className="lead">AHA gestiona organizaciones, desde donde buscamos ser los mejores socios para alcanzar mejores resultados de negocio, a través de la Gestión de la Inclusión.</p>
        <hr className="my-4" />
        <p>En AHA participan profesionales multidisciplinarios, motivados por contribuir al éxito de las organizaciones desde una perspectiva sustentable.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="postulantes" role="button">Registrarse</Link>
        </p>
      </div>
      </div>
      </React.Fragment>
    
    );
  }
}

export default Home;