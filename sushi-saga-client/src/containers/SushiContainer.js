import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let renderedSushi = props.sushis.slice(0,4)
  function handleClick(){
    console.log(renderedSushi)
  }

  return (
    <Fragment>
      <div className="belt">
        {
        renderedSushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} />)
        }
        <MoreButton clickFunction={handleClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer