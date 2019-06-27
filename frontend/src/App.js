import React from 'react';
import Routes from "./Routes";
import './App.css';

import formPreguntas from './constants/formularios/formPreguntas.js';
import formPostulanteLaboralNew from './constants/formularios/formPostulanteLaboralNew.js';
import formPostulante from './constants/formularios/formPostulante.js';
import formEmpresa from './constants/formularios/formEmpresa.js';
import formCuentaUsuario from './constants/formularios/formCuentaUsuario.js';

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