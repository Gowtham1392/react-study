import React from "react";
import UpdatedComponent from "./HOC";

class ClickCount extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0
  //     };
  //   }
  //   handleClick = () => {
  //     this.setState(prevState => ({
  //       count: prevState.count + 1
  //     }));
  //   };
  render() {
    return (
      <div>
        <button onClick={this.props.changeCount}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCount);
