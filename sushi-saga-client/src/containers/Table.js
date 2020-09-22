import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }} />
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addToBudget(parseInt(e.target.money.value))
    e.target.money.value = ""
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.budget} remaining!
      </h1>
      <form onSubmit={handleSubmit}>
        <label>Add Money to Wallet</label><br />
        <input type="text" id="money" name="money" /><br />
        <input type="submit" value="Add to Wallet" />
      </form>
          <div className="table">
            <div className="stack">
              {
                /* 
                   renderPlates takes an array 
                   and renders an empty plate
                   for every element in the array
                */
                renderPlates(props.sushiEaten)
              }
            </div>
          </div>
    </Fragment>
  )
}

export default Table