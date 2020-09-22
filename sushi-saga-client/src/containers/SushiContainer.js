import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

class SushiContainer extends Component{

 render(){ 
  return (
    <Fragment>
      <div className="belt">
        {this.props.sushi.map(sushi => (
          <Sushi sushi={sushi} key={sushi.id} />))
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}
}
export default SushiContainer