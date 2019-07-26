import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello from class component"
    };
  }

  handleClick() {
    this.setState({
      message: "You clicked me"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.handleClick()}>Click Me</button>
      </div>
    );
  }
}

export default Message;
