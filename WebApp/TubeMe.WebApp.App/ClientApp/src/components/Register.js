import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      registerError: false
    }
  }

  registerFormInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  register = () => {
    axios({
      method: 'post',
      baseURL: 'https://localhost:44367/api/users/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      }
    })
      .then((response) => {
        this.props.history.push("/login");
      })
      .catch(response => {
        this.setState({ registerError: true })
      })
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half">
          {this.state.registerFailed ? <div>Register failed</div> : null}
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input onChange={this.registerFormInput} name="email" type="text" placeholder="Email:" className="input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input onChange={this.registerFormInput} name="password" type="password" placeholder="Password:" className="input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Confirm password</label>
            <div className="control">
              <input onChange={this.registerFormInput} name="confirmPassword" type="password" placeholder="Confirm password:" className="input" />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button onClick={this.register} className="button is-success">Register</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Register)