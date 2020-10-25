import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Passoword</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-success">Login</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Back</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}