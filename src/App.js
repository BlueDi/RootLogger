import React, { Component } from "react";
import RootIntro from "./RootIntro";
import RootForm from "./RootForm";
import { Container } from "semantic-ui-react";

class App extends Component {
  state = { selectedgame: "root" };

  handleSelectGame = (e, { name }) => this.setState({ selectedgame: name });

  render() {
    return (
      <Container>
        <RootIntro
          game={this.state.selectedgame}
          onSelectGame={this.handleSelectGame}
        />
        <RootForm game={this.state.selectedgame} />
      </Container>
    );
  }
}

export default App;
