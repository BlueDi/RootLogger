import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import ReactDataGrid from "react-data-grid";

class RootPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      number_of_turns: 1
    };
    this.prepareRows(1);
  }

  handleChangeNumberOfTurns = (e, { name, value }) => {
    value = Number(value);
    this.prepareRows(value);
    this.setState({ [name]: value });
  };

  onToggle = (e, { name }) => {
    this.setState(
      prevState => ({
        [name]: !prevState[name],
        number_of_turns: 1
      }),
      this.prepareRows(1)
    );
  };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    var number = Object.values(updated)[0];
    if (!isNaN(number)) {
      const { handleChange, points } = this.props;
      const rows = points.slice();
      number = number > 30 ? "30" : "" + number < 0 ? "0" : "" + number;
      updated[Object.keys(updated)[0]] = number;
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      handleChange({}, { name: "points", value: rows });
    }
  };

  prepareValue = () => {
    var { value } = this.props;
    if (value != null) {
      value.forEach(player => {
        player.name = player.text;
        player.editable = "true";
      });
    }
    return value;
  };

  prepareRows = number_of_turns => {
    var rows = [];
    var keys = {};
    var { handleChange, value } = this.props;
    if (value != null) {
      value.forEach(player => (keys[player.key] = 0));
    }
    for (var i = 0; i < number_of_turns; i++) {
      rows.push({ turn: i + 1, ...keys });
    }
    handleChange({}, { name: "points", value: rows });
  };

  render() {
    const { checked, number_of_turns } = this.state;
    const { domination, handleChange, handleChangePoints, points } = this.props;

    var value = this.prepareValue();
    var not_domination = !domination;

    return (
      value && (
        <>
          <Form.Group widths="equal">
            <Form.Checkbox
              label="Domination Win"
              onChange={handleChange}
              name="domination"
              value={not_domination}
              checked={domination}
            />
            <Form.Checkbox
              label="Victory Points per Turn"
              onChange={this.onToggle}
              name="checked"
              checked={checked}
            />
            {this.state.checked && (
              <Form.Input
                key="nturns"
                label="Number of Turns"
                type="number"
                min="1"
                name="number_of_turns"
                value={number_of_turns}
                placeholder="1"
                onChange={this.handleChangeNumberOfTurns}
              />
            )}
          </Form.Group>
          {this.state.checked ? (
            <Form.Field>
              <ReactDataGrid
                columns={[{ key: "turn", name: "Turn" }, ...value]}
                rowGetter={i => points[i]}
                rowsCount={number_of_turns}
                minHeight={35 * (number_of_turns + 1)}
                onGridRowsUpdated={this.onGridRowsUpdated}
                enableCellSelect={true}
              />
            </Form.Field>
          ) : (
            <Form.Group widths="equal">
              {value.map(faction => (
                <Form.Input
                  key={faction.value}
                  label={`${faction.text} Points`}
                  type="number"
                  min="0"
                  max="30"
                  value={points.length > 0 ? points[0][faction.value] : 0}
                  name={faction.value}
                  placeholder={`${faction.text} Points`}
                  onChange={handleChangePoints}
                />
              ))}
            </Form.Group>
          )}
        </>
      )
    );
  }
}

export default RootPoints;
