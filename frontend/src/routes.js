//Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import App from './components/App';
import NuevoPuesto from './components/NuevoPuesto';
import Accesibilidad from './components/Accesibilidad';
import Match from './components/Match';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/accesibilidad" component={Accesibilidad} />
            <Route path="/match" component={Match} />
            <Route path="/" component={NuevoPuesto} />
            <Route component={Page404} />
        </Switch>
    </App>

export default AppRoutes;
