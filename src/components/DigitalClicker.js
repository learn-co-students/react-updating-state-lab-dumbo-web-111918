// Code DigitalClicker Component Here

import React, { PureComponent } from 'react'

export default class DigitalClicker extends PureComponent {
    state = {
        timesClicked: 0
    }

    clickHandler = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }


    render() {
        return (
            <button onClick={this.clickHandler}>
                <label>{this.state.timesClicked}</label>
            </button>
        )
    }
}