import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class NavMenu extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo"><img src="https://404store.com/2018/09/01/random-small-images43.md.png" width="50" height="25" alt="TubeMe" /></Link>
            <ul className="right hide-on-med-and-down">
              {this.props.currentUser ? (
                <React.Fragment>
                  <li><NavLink to="/profile"> <strong>Your profile : {this.props.currentUser.email} {this.props.currentUser.id}</strong></NavLink></li>
                  <li><NavLink to="/login">Log out</NavLink> </li>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Log in</NavLink></li>
                  </React.Fragment>
                )}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

let mapState = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapState)(NavMenu)
