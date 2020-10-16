import React, { Component } from 'react';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  componentDidMount() {
    let user = localStorage.getItem("user")
    this.setState({ name: user })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
