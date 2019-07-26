import React from "react";

class Greet extends React.Component {
  render(props) {
    return (
      <div>
        <h1>
          Hello {this.props.name},{this.props.id}
        </h1>
      </div>
    );
  }
}

export default Greet;
