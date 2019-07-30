import React, { Component } from "react";
import { Form, Icon, Message, Rating } from "semantic-ui-react";

const root_data = require("./staticdata_root");
const factionsOptions = root_data.rootFactionsOptions;
const vast_data = require("./staticdata_vast");
const charactersOptions = vast_data.vastCharactersOptions;

class RootRecommendationComponent extends Component {
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
        const options = this.chooseOptions();
        var selected = [];
        for (var i = 0; i < number_of_players; i++) {
          selected.push(
            <Message icon key={i} color={options[i].colortext}>
              <Icon name="user" />
              <Message.Content>{options[i].text}</Message.Content>
            </Message>
          );
        }
        return selected;
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
