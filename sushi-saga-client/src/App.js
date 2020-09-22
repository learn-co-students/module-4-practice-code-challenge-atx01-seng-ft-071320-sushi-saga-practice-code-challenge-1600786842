import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    index: 0,
    wallet: 200
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(sushis => this.setState({sushis}))
  }

  getSushi = () => {
    return this.state.sushis.slice(this.state.index, this.state.index+4)
  }

  moreSushi = () => {
    if (this.state.index > 95) {
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index+4})
    }
  }

  eatSushi = (eatenID, eatenPrice) => {
    if (this.state.wallet >= 10) {
      this.setState({
        sushis: this.state.sushis.map(sushi => {
          if (sushi.id === eatenID) {
            return {...sushi, eaten: true}
          } else {
            return sushi
          }
        }),
        wallet: this.state.wallet - eatenPrice
      })
    } else {
      alert("If you ain't got no money take yo' broke ass home!!!")
    }
  }

  addMoney = (amount) => {
    this.setState({wallet: this.state.wallet + amount})
  }

  render() {
    console.log(this.state.sushis)
    let eaten = this.state.sushis.filter(sushi => sushi.eaten === true)
    return (
      <div className="app">
        <SushiContainer sushis={this.getSushi()} moreSushi={this.moreSushi} eatSushi={this.eatSushi} />
        <Table wallet={this.state.wallet} eaten={eaten} addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;