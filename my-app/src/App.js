import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Count from "./components/Count";
import Parent from "./components/Parent";
import ListsAndKeys from "./components/ListsAndKeys";
import Forms from "./components/Forms";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Gowtham" id="1" />
      <Message /> */}
      {/* <Count /> */}
      {/* <Parent /> */}
      {/* <ListsAndKeys /> */}
      <Forms />
    </div>
  );
}

export default App;
