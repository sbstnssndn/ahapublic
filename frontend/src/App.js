import React from 'react';
import Routes from "./Routes";
import './App.css';

import formPreguntas from './formularios/formPreguntas.js';
import formPostulanteLaboralNew from './formularios/formPostulanteLaboralNew.js';
import formPostulante from './formularios/formPostulante.js';
import formEmpresa from './formularios/formEmpresa.js';
import formCuentaUsuario from './formularios/formCuentaUsuario.js';

function App() {


  return (
    <Routes
		formPostulante={formPostulante}
		formPostulanteLaboral={formPostulanteLaboralNew}
		formEmpresa={formEmpresa}
		formCuentaUsuario={formCuentaUsuario}
		formPreguntas={formPreguntas}
    />
  );
}

export default App;