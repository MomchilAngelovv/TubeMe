import React, { Component } from 'react'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleOnInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleOnRegister = () => {
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input onChange={this.handleOnInputChange} name="email" type="text" placeholder="Email:" className="input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input onChange={this.handleOnInputChange} name="password" type="password" placeholder="Password:" className="input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Confirm password</label>
            <div className="control">
              <input onChange={this.handleOnInputChange} name="confirmPassword" type="password" placeholder="Confirm password:" className="input" />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button onClick={this.handleOnRegister} className="button is-success">Register</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}