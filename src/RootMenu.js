import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const rootRulesLink = "http://root.livingrules.io/";
const vastRulesLink =
  "https://boardgamegeek.com/filepage/136381/rules-summaries-and-one-pagers";

class RootMenu extends Component {
  chooseRulesLink() {
    switch (this.props.game) {
      case "root":
        return rootRulesLink;
      case "vast":
        return vastRulesLink;
      default:
    }
  }

  render() {
    const { game, onSelectGame } = this.props;

    return (
      <Menu>
        <Menu.Item
          as="a"
          href={this.chooseRulesLink()}
          target="_blank"
          content="Rules"
        />

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
