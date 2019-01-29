import React, {Component} from 'react'

class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }

  render() {
    const { timesClicked } = this.state
    return (
      <button onClick={() => this.setState({timesClicked: timesClicked+1})}>{timesClicked}</button>
      )
  }

}

export default DigitalClicker
