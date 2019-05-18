import React, { Component } from "react";
import { Statistic } from "semantic-ui-react";
import { VictoryContainer, VictoryPie } from "victory";

const factionsOptions = [
  { key: "mc", value: "mc", text: "Marquise de Cat", color: "EC7A21" },
  { key: "ed", value: "ed", text: "Eyrie Dynasties", color: "26447D" },
  { key: "wa", value: "wa", text: "Woodland Alliance", color: "60B657" },
  { key: "vb", value: "vb", text: "Vagabond", color: "8A8987" },
  { key: "lc", value: "lc", text: "Lizard Cult", color: "F4EF6F" },
  { key: "rc", value: "rc", text: "Riverfolk Company", color: "#FFF59D" },
  { key: "cc", value: "cc", text: "Corvid Conspiracy", color: "56489F" },
  { key: "gc", value: "gc", text: "The Great Dutchy", color: "CA8245" }
];

const charactersOptions = [
  { key: "kn", value: "kn", text: "Knight", color: "#DDAB28" },
  { key: "pa", value: "pa", text: "Paladin", color: "#997E19" },
  { key: "gb", value: "gb", text: "Goblins", color: "6FBF4B" },
  { key: "sk", value: "sk", text: "Skeletons", color: "0A4721" },
  { key: "dg", value: "dg", text: "Dragon", color: "CF202E" },
  { key: "sp", value: "sp", text: "Spider", color: "8D0103" },
  { key: "cv", value: "cv", text: "Cave", color: "5F2E7E" },
  { key: "mn", value: "mn", text: "Manor", color: "511471" },
  { key: "tf", value: "tf", text: "Thief", color: "777679" },
  { key: "ec", value: "ec", text: "Enchanter", color: "787A77" }
];

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
          <Statistic.Value>{max.y}</Statistic.Value>
          <Statistic.Value text>{max.x}</Statistic.Value>
          <Statistic.Label>Most Wins</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>{min.y}</Statistic.Value>
          <Statistic.Value text>{min.x}</Statistic.Value>
          <Statistic.Label>Least Wins</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    );
  }
}

export default RootStats;
