import React, { Component } from "react";
import RootIntro from "./RootIntro";
import RootFeed from "./RootFeed";
import RootForm from "./RootForm";
import RootStats from "./RootStats";
import { Container } from "semantic-ui-react";

class App extends Component {
  state = { selectedgame: "root", view: "form" };

  handleSelectGame = (e, { name }) => this.setState({ selectedgame: name });
  handleShowView = (e, { name }) => {
    const { view } = this.state;
    view === name
      ? this.setState({ view: "form" })
      : this.setState({ view: name });
  };

  setContent() {
    const { selectedgame, view } = this.state;
    switch (view) {
      case "stats":
        return <RootStats game={selectedgame} />;
      case "recommendation":
        return <></>;
      case "form":
      default:
        return (
          <>
            <RootForm game={selectedgame} />
            <RootFeed />
          </>
        );
    }
  }

  render() {
    const { selectedgame } = this.state;
    var content = this.setContent();

    return (
      <Container>
        <RootIntro
          game={selectedgame}
          onSelectGame={this.handleSelectGame}
          onShowView={this.handleShowView}
        />
        {content}
      </Container>
    );
  }
}

export default App;
