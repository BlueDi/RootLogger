import React, { Component } from "react";
import RootIntro from "./RootIntro";
import RootFeed from "./RootFeed";
import RootForm from "./RootForm";
import RootStats from "./RootStats";
import { Container } from "semantic-ui-react";

class App extends Component {
  state = { selectedgame: "root", showStats: false };

  handleSelectGame = (e, { name }) => this.setState({ selectedgame: name });
  handleShowStats = e => this.setState({ showStats: !this.state.showStats });

  render() {
    var content = this.state.showStats ? (
      <RootStats game={this.state.selectedgame} />
    ) : (
      <>
        <RootForm game={this.state.selectedgame} />
        <RootFeed />
      </>
    );

    return (
      <Container>
        <RootIntro
          game={this.state.selectedgame}
          onSelectGame={this.handleSelectGame}
          onShowStats={this.handleShowStats}
        />
        {content}
      </Container>
    );
  }
}

export default App;
