import React from "react";

class HoverCount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleMouseOver = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  render() {
    return (
      <div>
        <h3 onMouseOver={this.handleMouseOver}>
          Hovered {this.state.count} times
        </h3>
      </div>
    );
  }
}

export default HoverCount;
