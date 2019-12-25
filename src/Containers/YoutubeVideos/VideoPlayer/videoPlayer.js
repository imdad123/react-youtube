import React, { Component } from "react";
import API from "./../../../Api";

class VideoPlayer extends Component {
  state = {
    relatedVideo: []
  };
  componentDidMount() {
    API.relatedVideoAPI(this.props.match.params.id, 30).then((res) =>
      this.setState({
        relatedVideo: res.items
      })
    );
  }
  render() {
    console.log(this.state);
    return (
      <div style={{ marginTop: 70 }}>
        <embed
          src={"https://www.youtube.com/embed/" + this.props.match.params.id}
        ></embed>
      </div>
    );
  }
}

export default VideoPlayer;
