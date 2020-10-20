import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Login } from './components/Login';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login}/>
      </Layout>
    );
  }
}
