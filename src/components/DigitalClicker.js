// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
state = {
  timesClicked: 0
}

doThis = () => {
  this.setState({
    timesClicked: this.state.timesClicked + 1
  })
  // debugger
}

render(){
  // debugger
return (<button onClick= {this.doThis}>{this.state.timesClicked}</button>)
}
}

export default DigitalClicker
