// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{

  state = {
    errors: [],
user: null,
settings: {
  bitrate: 8,
  video: {
    resolution: '1080p'
  }
}
  }

  bitRatey = () =>{
    this.setState({

      settings:{
         ...this.state.settings,
        bitrate: 12
      }

    })


  }

  reZy = () => {
    this.setState({
      settings:{
         ...this.state.settings,
        video:{
          resolution: '720p'
        }
      }
    })
  }
  render(){
    // debugger
  return (
    <div>
    <div>
      <button onClick={this.bitRatey}className="bitrate">BitRate: {this.state.settings.bitrate}</button>
      </div>
      <div>
      <button onClick={this.reZy}className="resolution">Resolution: {this.state.settings.video.resolution}</button>
      </div>
    </div>
    )
  }
}

export default YouTubeDebugger
