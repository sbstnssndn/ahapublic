import React, { Component } from 'react';

class Home extends Component {
  
  state = {
    currentStage: 0,
    totalStages: 3,
    stages: []
  }

  render () {
    return (
      <p>Home</p>
    );
  }
}

export default Home;