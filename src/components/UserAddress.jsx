import axios from "axios";
import React, { Component } from "react";

export default class UserAddress extends Component {
  state = { limit: "", data: [], response: false };

  handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({ limit: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://fakestoreapi.com/users?limit=${this.state.limit}`;
    axios(url).then((res) => this.setState({ data: res.data }));
    console.log(this.state.data);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="limit">User Limit</label>
        <input
          onChange={this.handleChange}
          type="text"
          name="limit"
          value={this.state.limit}
        />
        <button type="submit"> Enviar</button>
      </form>
    );
  }
}
