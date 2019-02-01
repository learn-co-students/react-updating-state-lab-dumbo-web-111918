// Code YouTubeDebugger Component Here

import React, { PureComponent } from 'react'

export default class YouTubeDebugger extends PureComponent {
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

    // clickHandler = (e) => {
    //     e.persist()
    //     console.log("clicked")
    //     if (e.target.className.includes("bitrate")) {
    //         console.log('in bitrate')
    //         this.setState({
    //             settings: {...this.state.settings, bitrate: 12}
    //         }, console.log(this.state.settings.bitrate))
    //     } else if (e.target.className.includes("resolution")) {
    //         this.setState({
    //             settings: {...this.state.settings, video: {resolution: '720p'}}
    //         })
    //     }
    // }

    bitHandler = () => {
        this.setState({
          settings: { ...this.state.settings,
            bitrate: 12
          }
        }, console.log(this.state.settings.bitrate))
    }

     resHandler = () => {
        this.setState({
          settings: { ...this.state.settings,
            video: {
              resolution: '720p'
            }
          }
        })
     }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.bitHandler}> 
                    {this.state.settings.bitrate}
                </button>
                <button className="resolution" onClick={this.resHandler}> 
                    {this.state.settings.video.resolution}
                </button>
            </div>
        )
    }
}
