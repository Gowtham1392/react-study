import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Count from "./components/Count";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Gowtham" id="1" />
      <Message /> */}
      <Count />
    </div>
  );
}

export default App;
