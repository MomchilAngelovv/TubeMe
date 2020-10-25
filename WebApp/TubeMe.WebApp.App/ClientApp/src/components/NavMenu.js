import React from 'react';
import { Link } from 'react-router-dom';

export default class NavMenu extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item"><img src="https://404store.com/2018/09/01/random-small-images43.md.png" width="112" height="28" /></Link>

            <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a href='!#' className="navbar-item">Home</a>
              <a href='!#' className="navbar-item">Documentation</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a href='!#' className="navbar-link">More</a>
                <div className="navbar-dropdown">
                  <a href='!#' className="navbar-item">About</a>
                  <a href='!#' className="navbar-item">Jobs</a>
                  <a href='!#' className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a href='!#' className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/register" className="button is-primary"> <strong>Register</strong></Link>
                  <Link to="/login" className="button is-light">Log in</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
