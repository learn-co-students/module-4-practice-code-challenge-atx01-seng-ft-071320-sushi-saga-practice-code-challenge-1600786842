import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

import ebi from '../sushi/ebi.png'
import maguro from '../sushi/maguro.png'
import sake from '../sushi/sake.png'
import tobiko from '../sushi/tobiko.png'

const sushiPics = {
  './sushi/ebi.png': ebi,
  './sushi/maguro.png': maguro,
  './sushi/sake.png': sake,
  './sushi/tobiko.png': tobiko
}

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi sushi={sushi} key={sushi.id} img={sushiPics[sushi.img_url]} handleBudget= {props.handleClick} budget= {props.budget}/>)}
        <MoreButton handleMoreBtn={props.handleMoreBtn}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer



