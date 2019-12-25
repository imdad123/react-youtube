import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HeaderNav from "./Containers/HeaderNav/HeaderNav";
import Home from "./Containers/Home";
import VideoPlayer from "./Containers/YoutubeVideos/VideoPlayer/videoPlayer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/watch/:id"
            render={(props) => <VideoPlayer {...props} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
