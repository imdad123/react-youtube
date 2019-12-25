import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./SideBarItem.scss";
export const SideBarItem = props => {
  const highlight = props.highlight ? "highlight" : null;
  return (
    <Menu.Item className={["sidebar-item", highlight].join(" ")}>
      <div className="sidebar-item-alignment-container">
        <span>
          <Icon size="large" name={props.icon} />{" "}
        </span>
        <span>{props.label}</span>
      </div>
    </Menu.Item>
  );
};
