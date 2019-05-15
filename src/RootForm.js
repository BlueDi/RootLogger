import React, { Component } from "react";
import { Form, Message } from "semantic-ui-react";

const factionsOptions = [
  { key: "mc", value: "mc", text: "Marquise de Cat" },
  { key: "ed", value: "ed", text: "Eyrie Dynasties" },
  { key: "wa", value: "wa", text: "Woodland Alliance" },
  { key: "vb", value: "vb", text: "Vagabond" },
  { key: "lc", value: "lc", text: "Lizard Cult" },
  { key: "rc", value: "rc", text: "Riverfolk Company" },
  { key: "cc", value: "cc", text: "Corvid Conspiracy" },
  { key: "gc", value: "gc", text: "The Great Dutchy" }
];

const rootMapOptions = [
  { key: "d", value: "d", text: "Default" },
  { key: "w", value: "w", text: "Winter" },
  { key: "m", value: "m", text: "Mountain" },
  { key: "l", value: "l", text: "Lake" }
];

const rootDeckOptions = [
  { key: "d", value: "d", text: "Default" },
  { key: "ep", value: "ep", text: "Exiles & Partisans" }
];

const charactersOptions = [
  { key: "kn", value: "kn", text: "Knight" },
  { key: "pa", value: "pa", text: "Paladin" },
  { key: "gb", value: "gb", text: "Goblins" },
  { key: "sk", value: "sk", text: "Skeletons" },
  { key: "dg", value: "dg", text: "Dragon" },
  { key: "sp", value: "sp", text: "Spider" },
  { key: "cv", value: "cv", text: "Cave" },
  { key: "mn", value: "mn", text: "Manor" },
  { key: "tf", value: "tf", text: "Thief" },
  { key: "ec", value: "ec", text: "Enchanter" }
];

class RootForm extends Component {
  state = {
    deck: null,
    map: null,
    options: factionsOptions,
    searchQuery: null,
    value: null,
    winner: null
  };

  componentDidUpdate(prevProps) {
    if (this.props.game !== prevProps.game) {
      this.setState({
        deck: null,
        map: null,
        options: this.chooseOptions(),
        played_factions: [],
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
  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  toggleSearch = e => this.setState({ search: e.target.checked });

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
    const { deck, map, options, played_factions, value, winner } = this.state;
    const capitalizedGameName =
      this.props.game[0].toUpperCase() + this.props.game.slice(1);
    const headerMessage = `Welcome to ${capitalizedGameName} Logger!`;
    const typeName = this.chooseTypeName();
    const typePlaceHolder = `Select the ${typeName}`;

    return (
      <>
        <Message
          attached
          header={headerMessage}
          content="Fill out the form below to log your play"
        />
        <Form className="attached fluid segment">
          <Form.Dropdown
            label={typeName}
            fluid
            selection
            multiple
            search
            options={options}
            value={played_factions}
            placeholder={typePlaceHolder}
            onChange={this.handleChangeFactions}
            onSearchChange={this.handleSearchChange}
          />
          <Form.Dropdown
            label="Winner"
            fluid
            selection
            search
            options={value}
            value={winner}
            name="winner"
            placeholder="Select the Winner"
            onChange={this.handleChange}
            onSearchChange={this.handleSearchChange}
          />
          {this.props.game === "root" && (
            <>
              <Form.Dropdown
                label="Map"
                fluid
                selection
                search
                options={rootMapOptions}
                value={map}
                name="map"
                placeholder="Select the Map"
                onChange={this.handleChange}
                onSearchChange={this.handleSearchChange}
              />
              <Form.Dropdown
                label="Deck"
                fluid
                selection
                search
                options={rootDeckOptions}
                value={deck}
                name="deck"
                placeholder="Select the Deck"
                onChange={this.handleChange}
                onSearchChange={this.handleSearchChange}
              />
            </>
          )}
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </>
    );
  }
}

export default RootForm;
