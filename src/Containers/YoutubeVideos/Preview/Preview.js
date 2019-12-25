import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import API from "../../../Api";

import "./preview.scss";

class Preview extends Component {
  state = {
    video: []
  };
  componentDidMount() {
    API.VidoeCallApi(this.props.query, 10).then((res) => {
      this.setState({
        video: res.items
      });
    });
  }

  videoPlayer = (id) => {
    if (id.videoId) {
      this.props.history.push("/watch/" + id.videoId);
    } else if (id.channelId) {
      alert("this is not a video");
    }
  };

  

  render() {
    console.log(this.state.video);
    return (
      <div className="container-preview">
        <h1>{this.props.title}</h1>
        <div className="preview">
          {/* {this.state.video.length > 0 &&
            this.state.video.map(({ snippet, id }) => { 
              return (
                <div
                  onClick={() => this.videoPlayer(id)}
                  key={snippet.thumbnails.medium.url}
                >
                  <img src={snippet.thumbnails.medium.url} alt="" />
                  <h4>{snippet.title.substr(0, 30)}...</h4>
                </div>
              );
            })}*/}
        </div>
      </div>
    );
  }
}

export default withRouter(Preview);
