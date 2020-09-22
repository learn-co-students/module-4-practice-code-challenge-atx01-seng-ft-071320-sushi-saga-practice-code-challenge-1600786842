import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(sushi => <Sushi sushi={sushi} key={sushi.id} eatedSushi={props.eatedSushi} eat={props.eat} />)
        }
        <MoreButton nextSushi={props.nextSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
