import React from "react";
import axios from "axios";

class HTTPGet extends React.Component {
  constructor() {
    super();
    this.state = {
      values: []
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.setState({
          values: response
        });
      })
      .catch(error => {
        alert("Inside Catch");
      });
  }
  render() {
    return (
      <div>
        {this.state.values.length
          ? this.state.values.map(value => (
              <div key={value.id}>{value.title}</div>
            ))
          : null}
      </div>
    );
  }
}

export default HTTPGet;
