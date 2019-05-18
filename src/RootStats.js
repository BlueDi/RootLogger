import React, { Component } from "react";
import { Statistic } from "semantic-ui-react";
import { VictoryPie } from "victory";

const factionsOptions = require("./staticdata_root").rootFactionsOptions;
const charactersOptions = require("./staticdata_vast").vastCharactersOptions;

function chooseOptions(game) {
  switch (game) {
    case "root":
      return factionsOptions;
    case "vast":
      return charactersOptions;
    default:
      return;
  }
}

function getCurrentGamePlays(data, game) {
  return data.filter(logged_play => logged_play.game === game);
}

function removeZeros(log) {
  return log.filter(element => element.y > 0);
}

class RootStats extends Component {
  state = {
    data: JSON.parse(localStorage.getItem("logged_data")) || []
  };

  countWinners = () => {
    const options = chooseOptions(this.props.game);

    return removeZeros(
      options.map(faction => {
        var count_wins = getCurrentGamePlays(
          this.state.data,
          this.props.game
        ).filter(log => log.winner === faction.value).length;
        return {
          x: faction.text,
          y: count_wins,
          fill: faction.color,
          value: faction.value
        };
      })
    );
  };

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
        <StatsMaxMin
          game={this.props.game}
          options={chooseOptions(this.props.game)}
          data={winners}
          storedData={this.state.data}
        />
        <VictoryPie
          width={550}
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

const SimpleStatistic = ({ value, text, label, color }) => (
  <Statistic>
    <Statistic.Value style={{ color: `#${color ? color : null}` }}>
      {value}
    </Statistic.Value>
    <Statistic.Value style={{ color: `#${color ? color : null}` }} text>
      {text}
    </Statistic.Value>
    <Statistic.Label>{label}</Statistic.Label>
  </Statistic>
);

class StatsMaxMin extends Component {
  findMaxValue(array) {
    return Math.max.apply(Math, array.map(o => o.y));
  }

  findMinValue(array) {
    return Math.min.apply(Math, array.map(o => o.y));
  }

  findElementWithText(array, text) {
    return array.find(o => o.x === text);
  }
  findElementWithValue(array, value) {
    return array.find(o => o.y === value);
  }

  countPlaysWithElement(value) {
    const didPlay = getCurrentGamePlays(
      this.props.storedData,
      this.props.game
    ).map(o => (o.played_factions ? o.played_factions.includes(value) : false));
    return didPlay.filter(Boolean).length;
  }

  getPercentWin() {
    return this.props.options.map(faction => {
      const number_wins = getCurrentGamePlays(
        this.props.storedData,
        this.props.game
      )
        .filter(log => log.winner === faction.value)
        .filter(Boolean).length;

      const number_plays = this.countPlaysWithElement(faction.value);
      return number_plays !== 0 ? number_wins / number_plays : 0;
    });
  }

  getMaxPercentWin() {
    const percent_wins = this.getPercentWin();
    const index = percent_wins.indexOf(Math.max(...percent_wins));
    return [this.props.options[index], percent_wins[index]];
  }
  getMinPercentWin() {
    const percent_wins = this.getPercentWin();
    const index = percent_wins.indexOf(Math.min(...percent_wins));
    return [this.props.options[index], percent_wins[index]];
  }

  render() {
    const { data } = this.props;
    const max = this.findElementWithValue(data, this.findMaxValue(data));
    const min = this.findElementWithValue(data, this.findMinValue(data));
    const max_loggedplays = this.getMaxPercentWin();
    const min_loggedplays = this.getMinPercentWin();

    const most_wins = max ? (
      <SimpleStatistic
        value={max.y}
        text={max.x}
        label={"Most Wins"}
        color={max.fill}
      />
    ) : null;

    const least_wins = min ? (
      <SimpleStatistic
        value={min.y}
        text={min.x}
        label={"Least Wins"}
        color={min.fill}
      />
    ) : null;

    const most_percent_wins = max_loggedplays ? (
      <SimpleStatistic
        value={Math.floor(100 * max_loggedplays[1]) + "%"}
        text={max_loggedplays[0].text}
        label={"Most Wins of Played Games"}
        color={max_loggedplays[0].color}
      />
    ) : null;
    const least_percent_wins = min_loggedplays ? (
      <SimpleStatistic
        value={Math.floor(100 * min_loggedplays[1]) + "%"}
        text={min_loggedplays[0].text}
        label={"Least Wins of Played Games"}
        color={min_loggedplays[0].color}
      />
    ) : null;

    return (
      <Statistic.Group widths="2">
        {most_wins}
        {least_wins}
        {most_percent_wins}
        {least_percent_wins}
      </Statistic.Group>
    );
  }
}

export default RootStats;
