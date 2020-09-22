import React from 'react'

const MoreButton = (props) => {

  // console.log(props.clickFunction)

    return <button onClick={props.clickFunction}>
            More sushi!
          </button>
}

export default MoreButton