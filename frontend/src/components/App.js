//Dependencias
import React, { Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

//Componentes
import Content from './Content.js'
import Header from './Header.js'
//import Footer from './Footer.js'


//Menú header
import menu from '../data/menu';

class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render() {

        const { children } = this.props;

        return(
            <div className="App">
                
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

                <Header title="AHA inclusión" menu={menu}> </Header>
                <Content body={ children }> </Content>

            </div>
        );
    }
}

export default App;

//<Footer copyright="&copy; Diinf 2019"> </Footer>