import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {

  constructor() {
    super()

    this.state = {
      index: 0,
      sushis: [],
      eatenSushis: []
    }
  }

  fetchSushi = () => {
    fetch(API)
      .then(data => data.json())
      .then(sushis => { this.setState({ sushis }) })
  }


  componentDidMount() {
    this.fetchSushi()
  }

  moreSushi = () => {
    // console.log('hi')
    this.setState({
      index: this.state.index + 4,
    })

  }

  eatSushi = (e) => {

    // filteredSushi = this.state.sushis.filter(sushi => sushi.id === e.target.id)

    // this.setState({
    //   sushis: 
    // })


    console.log(e.target.id)

  }

  render() {
    let fourSushis = this.state.sushis.slice(this.state.index, 4)
    return (
      <div className="app">
        <SushiContainer sushis={fourSushis} moreSushi={this.moreSushi} eatSushi={this.eatSushi} />
        <Table sushis={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App; 