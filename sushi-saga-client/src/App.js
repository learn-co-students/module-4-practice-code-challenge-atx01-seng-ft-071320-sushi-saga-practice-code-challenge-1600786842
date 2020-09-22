import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super() 
    this.state = {
      sushis: [],
      loaded: false,
      firstI: 0,
      secondI: 4,
      budget: 100,
      platesArray: []
    }
  }


  getSushis = () => {
    fetch(API).then(res => res.json()).then(
      (result) => {
        this.setState({
          sushis: result,
          loaded: true
        });
      }
    )
  }


  changeIndexState = () => {
    this.setState( previousState => {
      return {
        firstI: previousState.firstI += 4,
        secondI: previousState.secondI += 4
      }
    });
  }

  handleClick = (price) => {
    this.setState( previousState => {
      return {
        budget: previousState.budget - price,
        platesArray: previousState.platesArray.concat(price)
      } 
    });
  }


  render() {
    if (this.state.loaded === false) {
      this.getSushis()
    }

    const fourSushi = this.state.sushis.slice(this.state.firstI, this.state.secondI)

    return (
      <div className="app">
        <SushiContainer sushis={fourSushi} handleMoreBtn={this.changeIndexState} handleClick={this.handleClick} budget={this.state.budget}/>
        <Table budget={this.state.budget} platesArray= {this.state.platesArray}/>
      </div>
    );
  }
}

export default App;


