import React, { Component } from "react";
import { Form } from "semantic-ui-react";

const factionsOptions = [
  { key: "mc", value: "mc", text: "Marquise de Cat" },
  { key: "ed", value: "ed", text: "Eyrie Dynasties" },
  { key: "wa", value: "wa", text: "Woodland Alliance" },
  { key: "vb", value: "vb", text: "Vagabond" },
  { key: "lc", value: "lc", text: "Lizard Cult" },
  { key: "rc", value: "rc", text: "Riverfolk Company" }
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
    options: factionsOptions,
    searchQuery: null,
    value: null,
    winner: null
  };

  componentDidUpdate(prevProps) {
    if (this.props.game !== prevProps.game) {
      this.setState({
        options: this.chooseOptions(),
        played_factions: [],
        searchQuery: null,
        value: null,
        winner: null
      });
    }
  }

  handleWinner = (e, { value }) => this.setState({ winner: value });
  handleChangeFactions = (e, { value }) => {
    var selected_factions = [];
    var coise = value.forEach(v => {
      const match = this.state.options.find(f => f.key === v);
      selected_factions.push(match);
      return match;
    });
    console.log(coise);
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

  render() {
    const { options, played_factions, value, winner } = this.state;

    return (
      <Form>
        <Form.Dropdown
          fluid
          selection
          multiple
          search
          options={options}
          value={played_factions}
          placeholder="Select the Factions"
          onChange={this.handleChangeFactions}
          onSearchChange={this.handleSearchChange}
        />
        <Form.Dropdown
          fluid
          selection
          search
          options={value}
          value={winner}
          placeholder="Select the Winner"
          onChange={this.handleWinner}
          onSearchChange={this.handleSearchChange}
        />
        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    );
  }
}

export default RootForm;
