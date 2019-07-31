import React from "react";
import RefChild from "./RefChild";

class RefParent extends React.Component {
  constructor() {
    super();
    this.refTest = React.createRef();
  }
  handleClick = () => {
    this.refTest.current.getAlert();
  };
  render() {
    return (
      <div>
        <RefChild ref={this.refTest} />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default RefParent;
