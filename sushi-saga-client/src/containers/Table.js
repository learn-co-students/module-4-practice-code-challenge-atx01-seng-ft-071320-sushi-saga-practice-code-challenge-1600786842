import React, { Fragment } from 'react'
import WalletForm from '../components/WalletForm'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eaten)
          }
        </div>
      </div>
      <div className="form">
        <h3>Add Money!</h3>
        <WalletForm wallet={props.wallet} addMoney={props.addMoney} />
      </div>
    </Fragment>
  )
}

export default Table