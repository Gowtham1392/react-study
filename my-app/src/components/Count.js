import React from "react";

class Count extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleIncrement() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Count = {this.state.count}</h1>
        <button
          onClick={() => {
            this.handleIncrement();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Count;
