import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import RootForm from "./RootForm";

function App() {
  return (<div className="App">
    <img src={logo} className="App-logo" alt="logo"/>
    <RootForm/>
  </div>);
}

export default App;
