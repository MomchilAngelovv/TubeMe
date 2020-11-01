import React from 'react';
import { Route } from 'react-router-dom'

import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import VideoDetails from './components/VideoDetails';

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/videos/:videoId' component={VideoDetails} />
      </Layout>
    );
  }
}
