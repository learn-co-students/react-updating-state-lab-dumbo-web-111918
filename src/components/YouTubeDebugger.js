import React, {Component} from "react"

class YouTubeDebugger extends Component {
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

  render() {
    const { settings } = this.state
    return (
      <div>
        <button className="bitrate" onClick={() => this.setState({settings: {...settings, bitrate: 12} })}>{settings.bitrate}</button>
        <button className="resolution" onClick={() => this.setState({settings: { ...settings, video: { ...settings.video, resolution: '720p'}}})}>{settings.video.resolution}</button>
      </div>
      )
  }

}

export default YouTubeDebugger
