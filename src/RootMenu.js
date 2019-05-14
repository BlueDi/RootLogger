import React, {Component} from "react";
import {Menu} from "semantic-ui-react";

class RootMenu extends Component {
  state = {activeItem: "root"};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    return (
      <Menu>
        <Menu.Item
          as="a"
          href="http://root.livingrules.io/"
          name="rules"
          active={activeItem === "rules"}
          content="Rules"
        />

        <Menu.Item
          name="root"
          active={activeItem === "root"}
          content="Root"
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default RootMenu;
