import React, { Component } from 'react';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { name: localStorage.getItem("user") };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
