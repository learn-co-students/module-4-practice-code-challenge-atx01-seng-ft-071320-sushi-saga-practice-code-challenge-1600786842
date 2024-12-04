import React, { Component } from 'react'


class Sushi extends React.Component {

  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    if (this.props.budget < this.props.sushi.price) {
      return 
    } else {
      this.setState({
        clicked: true
      }, this.props.handleBudget(this.props.sushi.price));
    }
  }

  render() {

    let image = ''
    if (this.state.clicked === false) {
      image = this.props.img
    } 

    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleClick}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            false ?
              null
            :
              <img src={image} alt= "" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi


