import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  componentDidMount() {  
    this.fetchSushi()
  }

fetchSushi = () => {
  fetch(API)
  .then(res => res.json())
  .then(sushi => this.setState({sushi: sushi}))
}

state = {
  sushi: []
}

  render() { 
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushi}/>
        <Table />
      </div>
    );
  }
}

export default App;