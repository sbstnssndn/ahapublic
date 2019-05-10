//Dependencias
import React, { Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

//Componentes
import Content from './Content.js'
import Header from './Header.js'
import Footer from './Footer.js'

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

                <Header title="AHA inclusión" menu={menu}> </Header>
                <Content body={ children }> </Content>
                <Footer copyright="&copy; Diinf 2019"> </Footer>

            </div>
        );
    }
}

export default App;
