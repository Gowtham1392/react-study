import React from "react";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comment: "",
      technologies: "react"
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleCommentsChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSelectChange = event => {
    this.setState({
      technologies: event.target.value
    });
  };
  handleSubmit = event => {
    alert("Here I am");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentsChange}
          />
        </div>
        <div>
          <select
            value={this.state.technologies}
            onChange={this.handleSelectChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Forms;
