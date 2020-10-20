import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Home } from './Home'
import { Login } from './Login';

export class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: localStorage.getItem('UserName') != null && localStorage.getItem('AccessToken') != null,
      userEmail: localStorage.getItem('UserName'),
      accessToken: localStorage.getItem('AccessToken')
    }
  }

  handleLogin = (userEmail) => {
    console.log('HandleLogin');
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      isLoggedIn: false,
      userEmail: '',
      userId: ''
    })
  }

  render() {
    return (
      <div>
        <NavMenu isLoggedIn={this.state.isLoggedIn} userEmail={this.state.userEmail} onLogout={this.handleLogout} />
        <Login onLogin={this.handleLogin} />
      </div>
    );
  }
}
