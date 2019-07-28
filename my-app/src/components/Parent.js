import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  handleClick(msg) {
    alert("I am clicked, " + msg);
  }

  render() {
    return (
      <div>
        <Child buttonClick={this.handleClick} />
      </div>
    );
  }
}

export default Parent;
