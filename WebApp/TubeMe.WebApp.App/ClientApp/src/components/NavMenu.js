import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">Home</Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/register" className="button is-primary">Register</Link>
                  <Link to="/login" className="button is-light">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
