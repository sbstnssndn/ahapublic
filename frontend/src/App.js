import React from 'react';
import './App.css';
import MasterForm from './containers/MasterForm/MasterForm';
import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Toolbar />
        <div className="container pt-2">
          <div className="row">
            <SideMenu />
            <MasterForm type={'postulante'} />
          </div>
        </div>
       <Footer />
      </Layout>
    </React.Fragment>
  );
}

export default App;