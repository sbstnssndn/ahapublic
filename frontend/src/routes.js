//Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import App from './components/App';
//import Candidato from './components/Candidato';
import MasterForm from './components/MasterForm/MasterForm.js';
//import Accesibilidad from './components/Empresa';
//import Match from './components/Match';
//import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            
            <Route path="/" component={MasterForm} />
            
        </Switch>
    </App>

export default AppRoutes;

//<Route path="/accesibilidad" component={Accesibilidad} />
//<Route path="/match" component={Match} />
//<Route component={Page404} />