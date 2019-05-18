import React, { Component } from "react";
import { Image, Modal } from "semantic-ui-react";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory";

const factionsOptions = require("./staticdata_root").rootFactionsOptions;

class RootPlayStats extends Component {
  transformPoints() {
    const { session } = this.props;
    return Object.keys(session.points).map(key => {
      const index = factionsOptions.findIndex(f => f.value === key);
      const faction = factionsOptions[index];
      return {
        x: faction.text,
        y: parseInt(session.points[key], 10),
        fill: `#${faction.color}`
      };
    });
  }

  getWinnerImage(winner) {
    const { session } = this.props;
    const index = factionsOptions.findIndex(f => f.value === session.winner);
    return index >= 0 ? factionsOptions[index].image : null;
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
          <Modal.Description>
            {session.points && (
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
            )}
          </Modal.Description>
        </Modal.Content>
      </>
    );
  }
}

export default RootPlayStats;
