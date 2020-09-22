import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      budget: 100,
      sushi: [],
      sushiID: [],
      sushiEaten: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          sushi: data,
          sushiID: [1, 2, 3, 4]
        })
      });
  }

  addToBudget = (money) => {
    this.setState({
      budget: this.state.budget + money
    })
  }

  moreSushi = () => {
    let nextSushis = []
    if (this.state.sushiID[3] < this.state.sushi.length) { 
      nextSushis = this.state.sushiID.map(id => id + 4) 
    }
    else {
      nextSushis = [1, 2, 3, 4]
    }
    this.setState({
      sushiID: nextSushis
    })
  }

  eatSushi = (sushi) => {
    if (sushi.img_url !== "" && this.state.budget >= sushi.price) {
      console.log("nom")
      sushi.img_url = ""
      this.setState({
        sushiEaten: [sushi, ...this.state.sushiEaten],
        budget: this.state.budget - sushi.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} sushiID={this.state.sushiID} moreSushi={this.moreSushi} eatSushi={this.eatSushi} />
        <Table sushiEaten={this.state.sushiEaten} budget={this.state.budget} addToBudget={this.addToBudget} />
      </div>
    );
  }
}

export default App;