import React, { Component, Fragment } from 'react'

class Sushi extends Component{
state ={
  clicked: false,
  plates: []
}
  renderImage = (e) => {
if (this.state.clicked === false){
  return this.props.sushi.img_url
}else{
  return null
}
}

// addPlates = (e) =>{
//   console.log(e.target.parentElement)
//   if (this.state.clicked === true){
//     this.setState({plates: [...e.target]})
//   }
// }
render(){
  const food = this.props.sushi
  return (
    <div className="sushi"
      onClick={() => this.setState(prev => {return {clicked: !prev.clicked}})}>
      <div className="plate" 
          onClick={(e) => this.setState({plates: [...this.state.plates, e.target.parentElement]})}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={this.renderImage()} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {food.name} - ${food.price}
      </h4>
    </div>
  )
}
}
export default Sushi