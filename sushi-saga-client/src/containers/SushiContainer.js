import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
           props.sushis.map(sushi => <Sushi displaySushi={sushi} eatSushi={props.eatSushi}/>)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer