import React, {Component} from "react";
import {Divider, Feed} from "semantic-ui-react";

const factionsOptions = [
  {key: "mc", value: "mc", text: "Marquise de Cat"},
  {key: "ed", value: "ed", text: "Eyrie Dynasties"},
  {key: "wa", value: "wa", text: "Woodland Alliance"},
  {key: "vb", value: "vb", text: "Vagabond"},
  {key: "lc", value: "lc", text: "Lizard Cult"},
  {key: "rc", value: "rc", text: "Riverfolk Company"},
  {key: "cc", value: "cc", text: "Corvid Conspiracy"},
  {key: "gc", value: "gc", text: "The Great Dutchy"}
];

const charactersOptions = [
  {key: "kn", value: "kn", text: "Knight"},
  {key: "pa", value: "pa", text: "Paladin"},
  {key: "gb", value: "gb", text: "Goblins"},
  {key: "sk", value: "sk", text: "Skeletons"},
  {key: "dg", value: "dg", text: "Dragon"},
  {key: "sp", value: "sp", text: "Spider"},
  {key: "cv", value: "cv", text: "Cave"},
  {key: "mn", value: "mn", text: "Manor"},
  {key: "tf", value: "tf", text: "Thief"},
  {key: "ec", value: "ec", text: "Enchanter"}
];

const Event = ({logged_data}) => {
  const choosePlayers = () => {
    switch (logged_data.game) {
      case "root":
        return factionsOptions;
      case "vast":
        return charactersOptions;
      default:
        return;
    }
  };

  const winner = choosePlayers().find(
    player => player.value === logged_data.winner
  );

  const message =
    winner.text +
    " won a game of " +
    logged_data.played_factions.length +
    " players.";

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
