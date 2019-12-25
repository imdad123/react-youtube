import React, { Component } from "react";
import Sidebar from "./SideBar/SideBar";
import Video from "./YoutubeVideos/Video";

class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Video />
      </div>
    );
  }
}

export default Home;
