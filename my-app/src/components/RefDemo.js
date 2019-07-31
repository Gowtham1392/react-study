import React from "react";

class RefDemo extends React.Component {
  constructor() {
    super();
    this.refDemo = React.createRef();
  }
  componentDidMount() {
    this.refDemo = this.refDemo.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.refDemo} />
      </div>
    );
  }
}

export default RefDemo;
