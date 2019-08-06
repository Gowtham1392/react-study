import React from "react";
import axios from "axios";

class PostForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleForm = e => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(response => {
        console.log(response);
      });
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.handleChange}
          />
          <button type="submit">Click Me</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
