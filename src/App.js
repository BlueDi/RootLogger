import React from "react";
import RootIntro from "./RootIntro";
import RootForm from "./RootForm";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <RootIntro />
      <RootForm />
    </Container>
  );
}

export default App;
