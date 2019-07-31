import React, { Component } from "react";
import { Form, Icon, Message, Rating } from "semantic-ui-react";

const root_data = require("./staticdata_root");
const factionsOptions = root_data.rootFactionsOptions;
const playersReach = root_data.rootPlayersReach;
const vast_data = require("./staticdata_vast");
const charactersOptions = vast_data.vastCharactersOptions;

class RootRecommendationComponent extends Component {
  state = {
    data: JSON.parse(localStorage.getItem("logged_data")) || []
  };

  chooseOptions = () => {
    switch (this.props.game) {
      case "root":
        return factionsOptions;
      case "vast":
        return charactersOptions;
      default:
        return;
    }
  };

  randomInReach() {
    const { number_of_players } = this.props;
    const options = this.chooseOptions();
    var randoms = [];
    while (!this.isArraySumHigher(randoms)) {
      randoms = [];
      while (randoms.length < number_of_players) {
        var r = Math.floor(Math.random() * options.length);
        if (randoms.indexOf(r) === -1) randoms.push(r);
      }
    }
    return randoms;
  }

  isArraySumHigher(number_array) {
    const { number_of_players } = this.props;
    const options = this.chooseOptions();
    const reach_values = [];
    number_array.forEach(id => reach_values.push(options[id].reach || 99));
    const sum = reach_values.reduce((a, b) => a + b, 0);
    return sum >= playersReach[number_of_players];
  }

  multiplayerRecommendation = () => {
    const options = this.chooseOptions();
    var selected = [];
    const selected_factions = this.randomInReach();
    selected_factions.forEach(id =>
      selected.push(
        <Message icon key={id} color={options[id].colortext}>
          <Icon name="user" />
          <Message.Content>{options[id].text}</Message.Content>
        </Message>
      )
    );
    return selected;
  };

  render() {
    const { number_of_players } = this.props;
    switch (number_of_players) {
      case 1:
        return (
          <Message negative>
            <Message.Header content="A solo player can only play against the Automatas" />
            <Message.List>
              <Message.Item content="You can select your favourite factions!" />
              <Message.Item content="Any of the automatas is compatible with any faction." />
            </Message.List>
          </Message>
        );
      case 0:
        return (
          <Message info>
            <Message.Header content="Please select the number of players for this session" />
            <Message.Content content="You can select your favourite factions!" />
          </Message>
        );
      default:
        return this.multiplayerRecommendation();
    }
  }
}

class RootRecommendation extends Component {
  state = {
    options: factionsOptions,
    max_number_of_players: 6,
    number_of_players: 0
  };

  componentDidUpdate(prevProps) {
    if (this.props.game !== prevProps.game) {
      this.setState({
        max_number_of_players: this.setMaxNumberOfPlayers(),
        number_of_players: 0
      });
    }
  }

  setMaxNumberOfPlayers = () => {
    switch (this.props.game) {
      case "root":
        return 6;
      case "vast":
        return 5;
      default:
        return 1;
    }
  };

  handleRate = (e, { rating }) => this.setState({ number_of_players: rating });

  render() {
    const { max_number_of_players, number_of_players } = this.state;
    const capitalizedGameName =
      this.props.game[0].toUpperCase() + this.props.game.slice(1);
    const headerMessage = `Welcome to ${capitalizedGameName} Logger!`;

    return (
      <>
        <Message
          attached
          header={headerMessage}
          content="Fill the settings to generate a new session"
        />
        <Form className="attached fluid segment">
          <Form.Input label="Number of Players">
            <Rating
              icon="star"
              maxRating={max_number_of_players}
              rating={number_of_players}
              onRate={this.handleRate}
            />
          </Form.Input>
          <RootRecommendationComponent
            game={this.props.game}
            number_of_players={number_of_players}
          />
        </Form>
      </>
    );
  }
}

export default RootRecommendation;
