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

  handleChange = (e, { name, value }) => {
    value = Number(value);
    this.prepareRows(value);
    this.setState({ [name]: value });
  };

  onToggle = () => {
    this.setState(
      prevState => ({
        checked: !prevState.checked
      }),
      this.prepareRows(this.state.number_of_turns)
    );
  };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    if (!isNaN(Object.values(updated)[0])) {
      const rows = this.state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      this.setState({ rows: rows });
    }
  };

  prepareValue = () => {
    var { value } = this.props;
    if (value != null) {
      value.forEach(player => {
        player.name = player.text;
        player.editable = true;
      });
    }
    return value;
  };

  prepareRows = number_of_turns => {
    var rows = [];
    var keys = {};
    var { value } = this.props;
    if (value != null) {
      value.forEach(player => (keys[player.key] = 0));
    }
    for (var i = 0; i < number_of_turns; i++) {
      rows.push({ turn: i + 1, ...keys });
    }
    this.setState({ rows: rows });
  };

  render() {
    const { checked, number_of_turns, rows } = this.state;
    const { handleChangePoints, points } = this.props;

    var value = this.prepareValue();
    console.log(number_of_turns, 35 * (number_of_turns + 1));
    return (
      value && (
        <>
          <Form.Group widths="equal">
            <Form.Checkbox
              label="Victory Points per turn"
              onChange={this.onToggle}
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
                onChange={this.handleChange}
              />
            )}
          </Form.Group>
          {this.state.checked ? (
            <Form.Field>
              <ReactDataGrid
                columns={[{ key: "turn", name: "Turn" }, ...value]}
                rowGetter={i => rows[i]}
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
                  value={points[faction.value]}
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
