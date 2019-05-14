import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class RootMenu extends Component {
  render() {
    const { game, onSelectGame } = this.props;

    return (
      <Menu>
        <Menu.Item as="a" href="http://root.livingrules.io/" content="Rules" />

        <Menu.Item
          name="root"
          active={game === "root"}
          content="Root"
          onClick={onSelectGame}
        />

        <Menu.Item
          name="vast"
          active={game === "vast"}
          content="Vast"
          onClick={onSelectGame}
        />
      </Menu>
    );
  }
}

export default RootMenu;
