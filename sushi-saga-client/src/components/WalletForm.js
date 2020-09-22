import React, { Component } from 'react'

class WalletForm extends Component {

    state = {
        addedMoney: 0
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({addedMoney: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addMoney(this.state.addedMoney)
    }

    render() {
        return (
            <div className="add-form">
                <form onSubmit={this.handleSubmit} >
                    <input onChange={() => this.handleChange} type="text" name="name" placeholder="Enter a whole number..." className="input-text" />
                    <br />
                    <input type="submit" name="submit" value="Add to Wallet" className="submit" />
                </form>
            </div>
        )
    }
}

export default WalletForm