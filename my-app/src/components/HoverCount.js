import React from "react";
import UpdatedComponent from "./HOC";

class HoverCount extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0
  //     };
  //   }
  //   handleMouseOver = () => {
  //     this.setState(prevState => ({
  //       count: prevState.count + 1
  //     }));
  //   };
  render() {
    return (
      <div>
        <h3 onMouseOver={this.props.changeCount}>
          Hovered {this.props.count} times
        </h3>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCount);
