import React, { Component } from "react";
import { Form, Message, Rating } from "semantic-ui-react";
import RootPoints from "./RootPoints";

const root_data = require("./staticdata_root");
const factionsOptions = root_data.rootFactionsOptions;
const rootMapOptions = root_data.rootMapOptions;
const rootDeckOptions = root_data.rootDeckOptions;
const vast_data = require("./staticdata_vast");
const charactersOptions = vast_data.vastCharactersOptions;

class RootForm extends Component {
  state = {
    date: "",
    deck: null,
    domination: false,
    map: null,
    options: factionsOptions,
    points: [],
    rating: 0,
    searchQuery: null,
    value: null,
    winner: null
  };

  componentDidUpdate(prevProps) {
    if (this.props.game !== prevProps.game) {
      this.setState({
        deck: null,
        domination: false,
        map: null,
        options: this.chooseOptions(),
        played_factions: [],
        points: [],
        rating: 0,
        searchQuery: null,
        value: null,
        winner: null
      });
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleChangeFactions = (e, { value }) => {
    var selected_factions = [];
    value.forEach(v => {
      const match = this.state.options.find(f => f.key === v);
      selected_factions.push(match);
      return match;
    });
    this.setState({ played_factions: value, value: selected_factions });
  };
  handleChangePoints = (e, { name, value }) =>
    this.setState({
      points: [
        {
          ...this.state.points[0],
          [name]: value
        }
      ]
    });
  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });
  handleSubmit = () => {
    const state_copy = {
      ...this.state,
      game: this.props.game
    };
    delete state_copy.options;
    delete state_copy.searchQuery;
    delete state_copy.value;

    const data_stored = JSON.parse(localStorage.getItem("logged_data")) || [];
    data_stored.push(state_copy);
    localStorage.setItem("logged_data", JSON.stringify(data_stored));

    this.setState({
      date: "",
      deck: null,
      domination: false,
      map: null,
      options: this.chooseOptions(),
      played_factions: [],
      rating: 0,
      searchQuery: null,
      value: null,
      winner: null
    });
  };
  handleRate = (e, { rating }) => this.setState({ rating });

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

  chooseTypeName = () => {
    switch (this.props.game) {
      case "root":
        return "Factions";
      case "vast":
        return "Characters";
      default:
        return;
    }
  };

  render() {
    const {
      deck,
      domination,
      map,
      options,
      points,
      played_factions,
      rating,
      value,
      winner
    } = this.state;
    const capitalizedGameName =
      this.props.game[0].toUpperCase() + this.props.game.slice(1);
    const headerMessage = `Welcome to ${capitalizedGameName} Logger!`;
    const typeName = this.chooseTypeName();
    const typePlaceHolder = `Select the ${typeName}`;

    var root_components = this.props.game === "root" && (
      <>
        <RootPoints
          handleChange={this.handleChange}
          handleChangePoints={this.handleChangePoints}
          domination={domination}
          points={points}
          value={value}
        />
        <Form.Dropdown
          label="Map"
          fluid="fluid"
          selection="selection"
          search="search"
          options={rootMapOptions}
          value={map}
          name="map"
          placeholder="Select the Map"
          onChange={this.handleChange}
          onSearchChange={this.handleSearchChange}
        />
        <Form.Dropdown
          label="Deck"
          fluid="fluid"
          selection="selection"
          search="search"
          options={rootDeckOptions}
          value={deck}
          name="deck"
          placeholder="Select the Deck"
          onChange={this.handleChange}
          onSearchChange={this.handleSearchChange}
        />
      </>
    );

    return (
      <>
        <Message
          attached
          header={headerMessage}
          content="Fill out the form below to log your play"
        />
        <Form className="attached fluid segment" onSubmit={this.handleSubmit}>
          <Form.Input
            label="Date"
            fluid="fluid"
            type="datetime-local"
            name="date"
            onChange={this.handleChange}
          />
          <Form.Dropdown
            label={typeName}
            fluid="fluid"
            selection="selection"
            multiple="multiple"
            search="search"
            options={options}
            value={played_factions}
            placeholder={typePlaceHolder}
            onChange={this.handleChangeFactions}
            onSearchChange={this.handleSearchChange}
          />
          <Form.Dropdown
            label="Winner"
            fluid="fluid"
            selection="selection"
            search="search"
            options={value}
            value={winner}
            name="winner"
            placeholder="Select the Winner"
            onChange={this.handleChange}
            onSearchChange={this.handleSearchChange}
          />
          {root_components}
          <Form.Input label="Rating">
            <Rating
              icon="star"
              maxRating={5}
              rating={rating}
              onRate={this.handleRate}
            />
          </Form.Input>
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </>
    );
  }
}

export default RootForm;
