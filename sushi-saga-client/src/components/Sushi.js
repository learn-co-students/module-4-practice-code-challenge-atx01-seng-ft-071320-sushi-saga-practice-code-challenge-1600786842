import React, { Fragment } from 'react'

const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" name="price" value={props.sushi.price}
           onClick={props.eatedSushi}>
        {
          props.eat ?
            null
          :
            <img src={props.sushi.img_url} alt="no" width="100%" name="price" value={props.sushi.price} />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
