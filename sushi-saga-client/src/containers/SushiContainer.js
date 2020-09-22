import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {



  render(){
    console.log(this.props)
    return (
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
        this.props.sushis.map(sushi => 
          <Sushi sushi = {sushi} 
          key = {sushi.id} 
          handleEaten = {this.props.handleEaten} 
          eaten = {this.props.eaten} 
          wallet = {this.props.wallet} />)
        }
        <MoreButton handleShowMoreSushiButton = {this.props.handleShowMoreSushiButton} />
      </div>
   )
  }
}

export default SushiContainer