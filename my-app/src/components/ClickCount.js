import React from "react";

class ClickCount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClickCount;
