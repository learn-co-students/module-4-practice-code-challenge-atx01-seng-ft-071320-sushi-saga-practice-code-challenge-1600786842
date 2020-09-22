import React from 'react'

const MoreButton = (props) => {
  return <button onClick={() => props.moreSushis()}>
  More Sushi!
    </button> 
}

export default MoreButton