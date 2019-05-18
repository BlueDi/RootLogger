import React, { Component } from "react";
import { Divider, Feed, Modal } from "semantic-ui-react";
import RootPlayStats from "./RootPlayStats";

const factionsOptions = require("./staticdata_root").rootFactionsOptions;
const charactersOptions = require("./staticdata_vast").vastCharactersOptions;

function choosePlayers(logged_data) {
  switch (logged_data.game) {
    case "root":
      return factionsOptions;
    case "vast":
      return charactersOptions;
    default:
      return;
  }
}

function winner(logged_data) {
  const searchWinner = choosePlayers(logged_data).find(
    player => player.value === logged_data.winner
  );
  return typeof searchWinner == "undefined" ? { text: "No one" } : searchWinner;
}

const Event = ({ logged_data, onClick }) => {
  const playedFactionsLength =
    typeof logged_data.played_factions == "undefined"
      ? "."
      : " of " + logged_data.played_factions.length + " players.";

  const message =
    winner(logged_data).text + " won a game" + playedFactionsLength;

  const current_time = new Date();
  const logged_time = new Date(logged_data.date);
  const time_elapsed = current_time - logged_time;
  const days_elapsed = Math.floor(time_elapsed / 1000 / 60 / 60 / 24);

  return (
    <Feed.Event onClick={onClick}>
      <Feed.Content>
        <Feed.Summary content={message} date={days_elapsed + " days ago"} />
      </Feed.Content>
    </Feed.Event>
  );
};

class GameSessionModal extends Component {
  state = {
    [this.props.index]: false
  };

  handleOpen = () => {
    this.setState({ [this.props.index]: true });
  };

  handleClose = () => {
    this.setState({ [this.props.index]: false });
  };

  render() {
    return (
      <Modal
        trigger={
          <Event logged_data={this.props.session} onClick={this.handleOpen} />
        }
      >
        <RootPlayStats session={this.props.session} />
      </Modal>
    );
  }
}

class RootFeed extends Component {
  state = {
    data: JSON.parse(localStorage.getItem("logged_data")) || []
  };

  render() {
    const divider =
      typeof this.state.data !== "undefined" && this.state.data.length > 0 ? (
        <Divider />
      ) : null;

    return (
      <>
        {divider}
        <Feed>
          {this.state.data.map((session, index) => (
            <GameSessionModal key={index} index={index} session={session} />
          ))}
        </Feed>
      </>
    );
  }
}

export default RootFeed;
