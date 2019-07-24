import React, { Component } from "react";
import { Image, Modal } from "semantic-ui-react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLine
} from "victory";

const factionsOptions = require("./staticdata_root").rootFactionsOptions;

class RootPlayStats extends Component {
  getWinnerImage(winner) {
    const { session } = this.props;
    const index = factionsOptions.findIndex(f => f.value === session.winner);
    return index >= 0 ? factionsOptions[index].image : null;
  }

  setWhichGraph() {
    const { session } = this.props;
    if (!session.points) return;
    if (session.points.length > 1) {
      return <TurnsScoreGraph session={this.props.session} />;
    } else {
      return <FinalScoreGraph session={this.props.session} />;
    }
  }

  render() {
    const { session } = this.props;
    return (
      <>
        <Modal.Header>{session.date}</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src={this.getWinnerImage(session.winner)}
          />
          <Modal.Description>{this.setWhichGraph()}</Modal.Description>
        </Modal.Content>
      </>
    );
  }
}

class TurnsScoreGraph extends Component {
  createLabels() {
    const { session } = this.props;
    const factions = session.played_factions;
    var label_data = [];
    factions.forEach((key, i) => {
      const index = factionsOptions.findIndex(f => f.value === key);
      const faction = factionsOptions[index];
      label_data.push({
        key: i,
        y: 10 + i * 20,
        text: faction.text,
        fill: `#${faction.color}`
      });
    });
    return label_data;
  }

  transformPoints() {
    const { session } = this.props;
    const points = session.points[0];
    return Object.keys(points).map(key => {
      if (key !== "turn") {
        const index = factionsOptions.findIndex(f => f.value === key);
        const faction = factionsOptions[index];
        return session.points.map((turn, index) => {
          return { x: index + 1, y: turn[key], stroke: `#${faction.color}` };
        });
      } else {
        return null;
      }
    });
  }

  render() {
    const session_dataset = this.transformPoints();
    const label_data = this.createLabels();
    return (
      <VictoryChart domainPadding={{ x: 20 }}>
        {label_data.map(faction => (
          <VictoryLabel
            x={60}
            y={faction.y}
            text={faction.text}
            style={{ fill: faction.fill }}
          />
        ))}
        <VictoryAxis
          style={{
            grid: { stroke: "#B3E5FC", strokeWidth: 0.25 }
          }}
          dependentAxis
        />
        <VictoryAxis
          style={{
            tickLabels: {
              verticalAnchor: "middle",
              textAnchor: "start"
            }
          }}
        />
        {session_dataset.map((player_points, index) => {
          if (player_points != null)
            return (
              <VictoryLine
                key={index}
                data={player_points}
                animate
                alignment="start"
                style={{
                  data: { stroke: d => d[0].stroke }
                }}
              />
            );
          else return null;
        })}
      </VictoryChart>
    );
  }
}

class FinalScoreGraph extends Component {
  transformPoints() {
    const { session } = this.props;
    const points = session.points[0];
    return Object.keys(points).map(key => {
      if (key !== "turn") {
        const index = factionsOptions.findIndex(f => f.value === key);
        const faction = factionsOptions[index];
        return {
          x: faction.text,
          y: parseInt(points[key], 10),
          fill: `#${faction.color}`
        };
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <VictoryChart domainPadding={{ x: 20 }}>
        <VictoryAxis
          style={{
            grid: { stroke: "#B3E5FC", strokeWidth: 0.25 }
          }}
          dependentAxis
        />
        <VictoryAxis
          style={{
            tickLabels: {
              padding: 1,
              angle: 10,
              verticalAnchor: "middle",
              textAnchor: "start"
            }
          }}
        />
        <VictoryBar
          style={{
            data: { fill: d => d.fill }
          }}
          data={this.transformPoints()}
          animate
          alignment="start"
        />
      </VictoryChart>
    );
  }
}

export default RootPlayStats;
