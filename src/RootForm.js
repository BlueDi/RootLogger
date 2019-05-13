import React, {Component} from "react";
import {Form} from "semantic-ui-react";

const factionsOptions = [
  {key: "mc", value: "mc", text: "Marquise de Cat"},
  {key: "ed", value: "ed", text: "Eyrie Dynasties"},
  {key: "wa", value: "wa", text: "Woodland Alliance"},
  {key: "vb", value: "vb", text: "Vagabond"},
  {key: "lc", value: "lc", text: "Lizard Cult"},
  {key: "rc", value: "rc", text: "Riverfolk Company"}
];

class RootForm extends Component {
  state = {
    searchQuery: null,
    value: [],
    winner: null
  };

  handleWinner = (e, {value}) => this.setState({winner: value});
  handleChangeFactions = (e, {value}) => {
    var selected_factions = [];
    value.forEach(v => {
      const coise = factionsOptions.find(f => f.key === v);
      selected_factions.push(coise);
      return coise;
    });
    this.setState({value: selected_factions});
  };
  handleSearchChange = (e, {searchQuery}) => this.setState({searchQuery});

  toggleSearch = e => this.setState({search: e.target.checked});

  render() {
    const {played_factions, winner} = this.state;

    return (
      <Form>
        <Form.Dropdown
          fluid
          selection
          multiple
          search
          options={factionsOptions}
          value={played_factions}
          placeholder="Select the Factions"
          onChange={this.handleChangeFactions}
          onSearchChange={this.handleSearchChange}
        />
        <Form.Dropdown
          fluid
          selection
          search
          options={this.state.value}
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
