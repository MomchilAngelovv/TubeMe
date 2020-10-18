import React, { Component } from 'react';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    this.setState({
      email: localStorage.getItem("Email")
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}
