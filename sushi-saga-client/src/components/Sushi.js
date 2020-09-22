import React from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  ate = () => {
    const price = this.props.sushi.price
    // this.setState({ eaten: true }, () => this.props.handleEaten(this.state.eaten, price))
    if (this.props.wallet >= price){
      this.setState({ eaten: true }, () => this.props.handleEaten(this.state.eaten, price))
    }
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.ate}>
          { 
            this.state.eaten
            ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" alt = {this.props.sushi.name} />
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