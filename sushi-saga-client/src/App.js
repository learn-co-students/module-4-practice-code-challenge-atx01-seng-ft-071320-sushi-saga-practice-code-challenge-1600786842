import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi'
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
state ={
  sushi: [],
  plates: []
}

componentDidMount(){
  fetch(API)
  .then(res => res.json())
  .then(data => this.setState({sushi: data}))
}


  render() {

    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} />
        <Table />
        
      </div>
    );
  }
}

export default App;