import React, { Component } from "react";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import { Subscription } from "./Subscription/Subscription";

class Subscriptions extends Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title="Subscriptions" />
        <Subscription label="MusicChannel" broadcasting={true} />
        <Subscription label="Ewiglife" amountNewVideos={20} />
        <Subscription label="Khubabib kunjahi" amountNewVideos={12} />
        <Subscription label="Techlution" amountNewVideos={32} />
      </React.Fragment>
    );
  }
}

export default Subscriptions;
