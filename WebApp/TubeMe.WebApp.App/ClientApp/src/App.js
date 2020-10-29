import React from 'react';
import { Route } from 'react-router-dom'

import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/profile' component={Profile} />
      </Layout>
    );
  }
}
