import React from 'react';
import './App.css';
import MasterForm from './containers/MasterForm/MasterForm';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <MasterForm type={'postulante'} />
      </Layout>
    </React.Fragment>
  );
}

export default App;
