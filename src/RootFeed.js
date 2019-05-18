import React, { Component } from "react";
import { Divider, Feed } from "semantic-ui-react";

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

const Event = ({ logged_data }) => {
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
    <Feed.Event>
      <Feed.Content>
        <Feed.Summary content={message} date={days_elapsed + " days ago"} />
      </Feed.Content>
    </Feed.Event>
  );
};

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
          {this.state.data.map((play, index) => (
            <Event key={index} logged_data={play} />
          ))}
        </Feed>
      </>
    );
  }
}

export default RootFeed;
