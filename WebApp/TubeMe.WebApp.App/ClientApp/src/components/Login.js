import React, { Component } from 'react';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <div>
        Hello login
      </div>
    );
  }
}
