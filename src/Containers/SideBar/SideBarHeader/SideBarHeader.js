import React from "react";
import { Menu } from "semantic-ui-react";

import "./SideBarHeader.scss";

const SideBarHeader = props => {
  const title = props.title ? props.title.toUpperCase() : "";
  return (
    <Menu.Item>
      <Menu.Header className="side-bar-header">{title}</Menu.Header>
    </Menu.Item>
  );
};

export default SideBarHeader;
