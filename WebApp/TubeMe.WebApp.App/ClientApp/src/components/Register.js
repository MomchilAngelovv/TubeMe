import React, { Component } from 'react';

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 'Monkata' };
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('clicked')
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
                <input className="input is-success" type="text" placeholder="Text input" />
                <span className="icon is-small is-left"><i className="fas fa-user"></i></span>
                <span className="icon is-small is-right"><i className="fas fa-check"></i></span>
              </div>
              <p className="help is-success">This username is available</p>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" onClick={ this.handleSubmit }>Submit</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
