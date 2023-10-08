import React,{ Component } from "react";

class ClassName extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  render() {
    return (
      <div className="form-case">
      <form>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="Enter Name"
        />
        <br />
        <input onChange={this.handleChangeEmail} 
        value={this.state.email}
        placeholder="Enter Email" />
        <br />
        <input placeholder="Password" />
        <br />
        <button onClick={console.log(this.state.name)}>Submit</button>
      </form>
      </div>
    );
  }
}

export default ClassName