import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    nextRound: 0,
    nextRound2: 4,
    notEated: false,
    money: 100,
    sushiEated: []
  }

  componentDidMount = () => {
    fetch(API).then(res => res.json())
    .then(sushi => this.setState({ sushi }))
  }

  nextSushi = () => {
    this.setState({ nextRound: this.state.nextRound + 4 })
    this.setState({ nextRound2: this.state.nextRound2 + 4 })
  }

  eatedSushi = (e) => {
    this.setState({ notEated: !this.state.notEated })
    this.setState({ sushiEated: [...this.state.sushiEated, "plate"] })
    //this.setState({ money: this.state.money })
    //console.log(this.state.sushiEated)
  }

  render() {
    const nSushi = this.state.sushi.slice(this.state.nextRound, this.state.nextRound2)
    return (
      <div className="app">
        <SushiContainer  eatedSushi={this.eatedSushi} eat={this.state.notEated} nextSushi={this.nextSushi} sushi={nSushi} />
        <Table money={this.state.money} plate={this.state.sushiEated} />
      </div>
    );
  }
}

export default App;
