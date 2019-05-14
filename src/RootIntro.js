import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import RootMenu from "./RootMenu";

class RootIntro extends Component {
  render() {
    return [
      <Image
        centered
        size="medium"
        src="https://cf.geekdo-images.com/imagepage/img/RhpM7ioEqBhBuSOwMpN5Vcqcztk=/fit-in/900x600/filters:no_upscale()/pic3791326.jpg"
      />,
      <RootMenu game={this.props.game} onSelectGame={this.props.onSelectGame} />
    ];
  }
}

export default RootIntro;
