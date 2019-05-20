import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import PostulanteMainForm from './containers/PostulanteMainForm/PostulanteMainForm';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

function App() {
  return (
    <Layout>
      <Toolbar />
      <PostulanteMainForm />
    </Layout>
  );
}

export default App;
