// Code YouTubeDebugger Component Here
import React from 'react'; 


class YouTubeDebugger extends React.Component {
    constructor (props) {
        super (props);
            this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }
    handleBitrateClick = () => {
        this.setState({
            //bitrate exists as a key inside settings and therfore we want to make a copy of
            //the whole object settings to get inside the key bitrate and change the value
            settings: {...this.state.settings, bitrate: 12}
        })
    }

    handleResolutionClick = () =>{
        this.setState({
            //in order to get to resolution, we need to copy objs of settings, and then make a copy of
            //the object with key video because video has inside the key of resolution, then we can update the resolution value
            settings: { ...this.state.settings, 
                video: { ...this.state.settings.video, resolution: '720p' } }
        })
    }

    render () {
        console.log(this.state);
        return (<div> 
            <button className="bitrate" onClick={this.handleBitrateClick}> {this.state.settings.bitrate} </button>
            <br/>
            <button  className="resolution" onClick={this.handleResolutionClick}> {this.state.settings.video.resolution}</button>
        </div>)
    }
}

export default YouTubeDebugger;