import React from 'react';
import { Route } from 'react-router-dom'

import NavMenu from './NavMenu'
import Login from './Login';
import Register from './Register';
import Home from './Home';


export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavMenu />
        <div className="container">
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </div>
      </React.Fragment>
    )
  }
}