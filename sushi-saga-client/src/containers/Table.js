import React, { Fragment } from 'react'

const Table = (props) => {
// not totally sure how this works but I want to set the equivilant of state to 
// a budget, and the as a plate is rendered it not only adds an image to the stack 
// but also subtracts the sushi.price from the state 
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ /* Give me how much money I have left */ } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates([])
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table