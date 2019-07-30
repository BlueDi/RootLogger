import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import RootMenu from "./RootMenu";

const rootLogo = require("./staticdata_root").rootLogo;
const vastLogo = require("./staticdata_vast").vastLogo;

class RootIntro extends Component {
  chooseLogo() {
    switch (this.props.game) {
      case "root":
        return rootLogo;
      case "vast":
        return vastLogo;
      default:
        return;
    }
  }

  render() {
    const { game, onSelectGame, onShowView } = this.props;
    return [
      <Image key="logo" centered size="medium" src={this.chooseLogo()} />,
      <RootMenu
        key="menu"
        game={game}
        onSelectGame={onSelectGame}
        onShowView={onShowView}
      />
    ];
  }
}

export default RootIntro;
