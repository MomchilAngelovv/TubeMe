import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

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

  componentDidMount() {
    this.setState({
      isLoggedIn: localStorage.getItem('UserEmail') != null && localStorage.getItem('AccessToken') != null,
      userEmail: localStorage.getItem('UserEmail'),
      accessToken: localStorage.getItem('AccessToken')
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavMenu/>
        <Container>
          {this.props.children}
        </Container>
      </React.Fragment>
    );
  }
}
