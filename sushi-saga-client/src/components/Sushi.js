import React, { Fragment } from 'react'

const Sushi = (props) => {

  return (
    <div className="sushi" >
      <div className="plate" id={props.sushi.id}
           onClick={props.eatSushi /* Give me a callback! */ }>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={props.sushi['img_url']/* Give me an image source! */ } alt={props.sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name/* Give me a name! */} - ${props.sushi.price/* Give me a price! */}
      </h4>
    </div>
  )
} 

export default Sushi