import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiID.map(id => 
            <Sushi key={id} sushi={props.sushi[id - 1]} eatSushi={props.eatSushi} />
            )
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer