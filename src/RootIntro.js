import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import RootMenu from "./RootMenu";

const rootLogo =
  "https://cf.geekdo-images.com/imagepage/img/RhpM7ioEqBhBuSOwMpN5Vcqcztk=/fit-in/900x600/filters:no_upscale()/pic3791326.jpg";
const vastLogo =
  "https://cf.geekdo-images.com/imagepage/img/d_-BA8wyApUR45GfQFcAKYulbOU=/fit-in/900x600/filters:no_upscale()/pic2962290.jpg";

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
    const { game, onSelectGame, onShowStats } = this.props;
    return [
      <Image key="logo" centered size="medium" src={this.chooseLogo()} />,
      <RootMenu
        key="menu"
        game={game}
        onSelectGame={onSelectGame}
        onShowStats={onShowStats}
      />
    ];
  }
}

export default RootIntro;
