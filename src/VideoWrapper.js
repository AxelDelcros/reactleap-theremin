import React, {Component} from 'react';

class VideoWrapper extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761'
        }
    }

    render () {
        let style = {
            position:"absolute",
            width:"100vw",
            // height:"100vh",
            top:"50px",
            zIndex:"1"
        }
        return (
            <video style={style} id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default VideoWrapper;