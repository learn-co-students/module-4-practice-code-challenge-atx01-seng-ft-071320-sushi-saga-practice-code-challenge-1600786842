import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  componentDidMount(){
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
    .then(res=>res.json())
    .then(sushis => this.setState({sushis}))
  }

  state = {
    sushis:[],
    showSushi: 4
  }

  



  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis}/>
        <Table />
      </div>
    );
  }
}

export default App;