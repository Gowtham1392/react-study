import React from "react";

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
    handleCount = () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          changeCount={this.handleCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
