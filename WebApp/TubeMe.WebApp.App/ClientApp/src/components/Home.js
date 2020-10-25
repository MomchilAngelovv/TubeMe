import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: "123123123",
        email: 'test@test.bg',
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Logged user: {this.state.user.id} {this.state.user.email}</h1>
      </React.Fragment>
    );
  }
}
