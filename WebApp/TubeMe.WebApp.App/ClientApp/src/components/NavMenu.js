import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavMenu extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      email: localStorage.getItem("Email"),
      loggedIn: true
    }
  }

  handleLogout = async (e) => {
    localStorage.clear();
    this.setState((state) => {
      return { count: state.isLoggedIn = false }
    })
  }

  render() {
    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link href="/#" to="/" className="navbar-item"><img src="https://img.favpng.com/17/19/10/turney-town-shell-logo-internet-online-and-offline-png-favpng-CcVyuzhwCY2g6XrdfXW94kCgB.jpg" alt="Description" /></Link>
            <a href="/#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a href="/#" className="navbar-link">More</a>
                <div className="navbar-dropdown">
                  <a href="/#" className="navbar-item">About</a>
                  <a href="/#" className="navbar-item">Jobs</a>
                  <a href="/#" className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a href="/#" className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>
            {isLoggedIn
              ?
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <button onClick={this.handleLogout} className="button is-primary">Logout</button>
                  </div>
                </div>
              </div>
              :
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link href="/#" to="/register" className="button is-primary">Register</Link>
                    <Link href="/#" to="/login" className="button is-light">Login</Link>
                  </div>
                </div>
              </div>}
          </div>
        </nav>
      </header>
    );
  }
}
