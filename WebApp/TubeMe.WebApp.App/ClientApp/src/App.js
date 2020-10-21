import React, { Component } from 'react';
import { Home } from './components/Home';
import { NavMenu } from './components/NavMenu'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: localStorage.getItem('UserEmail') != null && localStorage.getItem('AccessToken') != null,
      userEmail: localStorage.getItem('UserEmail'),
      accessToken: localStorage.getItem('AccessToken'),
      sum: 0,
    }

    console.log('constructor')
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
      console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  //  <Layout>
  //  <Route exact path='/' component={Home} />
  //</Layout>

  handleSum = (e, sum) => {
    console.log(sum)
    this.setState({ sum })
  }

  render() {
    console.log('render')
    return (
      <React.Fragment>
        <NavMenu sum={this.state.sum}></NavMenu>
        <Home onSum={this.handleSum}></Home>
      </React.Fragment>
    );
  }
}
