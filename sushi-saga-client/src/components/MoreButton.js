import React from 'react'

class MoreButton extends React.Component {
  render(){
    return <button onClick={this.props.handleShowMoreSushiButton}>
            More sushi!
          </button>
  }
}

export default MoreButton