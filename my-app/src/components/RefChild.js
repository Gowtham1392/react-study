import React from "react";

class RefChild extends React.Component {
  getAlert() {
    alert("In child component");
  }
  render() {
    return (
      <div>
        <h3>Inside render method</h3>
      </div>
    );
  }
}

export default RefChild;
