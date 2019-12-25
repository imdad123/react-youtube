import React, { Component } from "react";
import { Menu, Form, Input, Icon, Image } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import "./HeaderNav.scss";

class HeaderNav extends Component {
  state = {
    query: ""
  };

  onChange = (e) => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Link to="/">
            {" "}
            <span>EwigTube</span>
          </Link>
        </Menu.Item>
        <Menu.Menu className="nav-container">
          <Menu.Item className="search-input">
            <Form>
              <Form.Field>
                <Input
                  onChange={this.onChange}
                  placeholder="Search"
                  size="small"
                  action="GO"
                />
              </Form.Field>
            </Form>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item>
            <Icon className="header-icon" name="video camera" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="grid layout" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="chat" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="alarm" size="large" />
          </Menu.Item>
          <Menu.Item name="avatar">
            <Image src="http://via.placeholder.com/80x80" avatar />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(HeaderNav);
