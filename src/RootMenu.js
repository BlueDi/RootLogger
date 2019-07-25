import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const rootRulesLink = require("./staticdata_root").rootRulesLink;
const vastRulesLink = require("./staticdata_vast").vastRulesLink;

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
    const { game, onSelectGame, onShowStats } = this.props;

    return (
      <Menu stackable>
        <Menu.Item
          as="a"
          href={this.chooseRulesLink()}
          target="_blank"
          content="Rules"
        />
        <MenuGame name="root" game={game} onSelectGame={onSelectGame} />
        <MenuGame name="vast" game={game} onSelectGame={onSelectGame} />
        <MenuRight onShowStats={onShowStats} />
      </Menu>
    );
  }
}

const MenuGame = ({ name, game, onSelectGame }) => {
  const capitalizedGameName = name[0].toUpperCase() + name.slice(1);
  return (
    <Menu.Item
      name={name}
      active={game === name}
      content={capitalizedGameName}
      onClick={onSelectGame}
    />
  );
};

function handleFileSelected(e) {
  const reader = new FileReader();
  reader.onload = (theFile => {
    return function(e) {
      localStorage.setItem("logged_data", e.target.result);
    };
  })(e.target.files[0]);

  reader.readAsText(e.target.files[0]);
}

const MenuRight = ({ onShowStats }) => {
  var data =
    "text/json;charset=utf-8," +
    encodeURIComponent(localStorage.getItem("logged_data"));

  return (
    <Menu.Menu position="right">
      <Menu.Item content="Stats" onClick={onShowStats} />
      <Menu.Item as="label" htmlFor="file" className="ui icon button">
        Import
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleFileSelected}
        />
      </Menu.Item>
      <Menu.Item
        as="a"
        href={"data:" + data}
        download="rootlogger_data.json"
        content="Export"
      />
    </Menu.Menu>
  );
};

export default RootMenu;
