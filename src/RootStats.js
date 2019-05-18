import React, { Component } from "react";
import { Statistic } from "semantic-ui-react";
import { VictoryContainer, VictoryPie } from "victory";

const factionsOptions = require("./staticdata_root").rootFactionsOptions;
const charactersOptions = require("./staticdata_vast").vastCharactersOptions;

class RootStats extends Component {
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

  getCurrentGamePlays = () => {
    return this.state.data.filter(
      logged_play => logged_play.game === this.props.game
    );
  };

  countWinners = () => {
    const options = this.chooseOptions();

    return this.removeZeros(
      options.map(faction => {
        var count_wins = this.getCurrentGamePlays().filter(
          log => log.winner === faction.value
        ).length;
        return { x: faction.text, y: count_wins, fill: faction.color };
      })
    );
  };

  removeZeros(log) {
    return log.filter(element => element.y > 0);
  }

  handleClick = () => [
    {
      target: "data",
      mutation: props => {
        const stroke = props.style && props.style.stroke;
        return stroke === "#c43a31"
          ? null
          : {
              style: { stroke: "#c43a31", fill: props.style.fill }
            };
      }
    },
    {
      target: "labels",
      mutation: props =>
        props.text === props.datum.y ? null : { text: props.datum.y }
    }
  ];

  render() {
    const winners = this.countWinners();
    return (
      <>
        <StatsMaxMin data={winners} />
        <VictoryPie
          width={550}
          containerComponent={<VictoryContainer />}
          data={winners}
          events={[
            {
              target: "data",
              eventHandlers: {
                onClick: this.handleClick
              }
            }
          ]}
          style={{ data: { fill: d => d.fill } }}
        />
      </>
    );
  }
}

class StatsMaxMin extends Component {
  findMaxValue(array) {
    return Math.max.apply(Math, array.map(o => o.y));
  }

  findMinValue(array) {
    return Math.min.apply(Math, array.map(o => o.y));
  }

  findElementWithValue(array, value) {
    return array.find(o => o.y === value);
  }

  render() {
    const { data } = this.props;
    const max = this.findElementWithValue(data, this.findMaxValue(data));
    const min = this.findElementWithValue(data, this.findMinValue(data));
    return (
      <Statistic.Group widths="2">
        <Statistic>
          <Statistic.Value style={{ color: `#${max.fill}` }}>
            {max.y}
          </Statistic.Value>
          <Statistic.Value style={{ color: `#${max.fill}` }} text>
            {max.x}
          </Statistic.Value>
          <Statistic.Label>Most Wins</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value style={{ color: `#${min.fill}` }}>
            {min.y}
          </Statistic.Value>
          <Statistic.Value style={{ color: `#${min.fill}` }} text>
            {min.x}
          </Statistic.Value>
          <Statistic.Label>Least Wins</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    );
  }
}

export default RootStats;
