import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Home } from './Home'
import { Login } from './Login';

export class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: localStorage.getItem('UserEmail') != null && localStorage.getItem('AccessToken') != null,
      userEmail: localStorage.getItem('UserEmail'),
      accessToken: localStorage.getItem('AccessToken')
    }
  }

  handleLogin = (userEmail) => {
    this.setState({
      isLoggedIn: true,
      userEmail: userEmail
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
      <React.Fragment>
        <NavMenu isLoggedIn={this.state.isLoggedIn} userEmail={this.state.userEmail} onLogout={this.handleLogout} />
        <div className="container">
          <Login onLogin={this.handleLogin} userEmail={this.state.userEmail}/>
        </div>
      </React.Fragment>
    );
  }
}
