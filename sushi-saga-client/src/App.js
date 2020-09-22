import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
let pageCounter = 1

class App extends Component {

  componentDidMount (){
    fetch(`${API}/?_limit=4&_page=${pageCounter}`)
    .then(res => res.json())
    .then(sushiData => this.setState( {sushis: sushiData}
    ))
  }
  
  state = {
    sushis: [],
    wallet: 20,
    eaten: false
  }
  
  handleShowMoreSushiButton = () => {
    pageCounter++
    fetch(`${API}/?_limit=4&_page=${pageCounter}`)
    .then(res => res.json())
    .then(sushiData => this.setState( {sushis: sushiData}
    ))
  }

  handleEaten = (eaten, price) => {
    // console.log(price)
    const amountInWallet = parseInt(this.state.wallet)
    const remaining =  amountInWallet - price
      this.setState({ eaten, wallet: remaining })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis = {this.state.sushis} 
        handleShowMoreSushiButton = {this.handleShowMoreSushiButton} 
        handleEaten = {this.handleEaten} 
        eaten = {this.state.eaten} 
        wallet = {this.state.wallet} />
        <Table wallet = {this.state.wallet} />
      </div>
    );
  }
}

export default App;