import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 'Monkata' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', 'monk');
    this.props.history.push('/')
  }

  render() {
    return (
      <React.Fragment>
        <div className="columns">
          <div className="column is-half">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" onClick={ this.handleSubmit }>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
