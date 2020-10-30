import React from 'react'
import axios from 'axios'

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      registerFailed: false
    }
  }

  handleOnInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleOnLogin = async () => {
    let response = await axios({
      method: 'post',
      baseURL: 'https://localhost:44367/api/users/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: this.state.email,
        password: this.state.password,
      }
    })

    console.log(response)

    if (response.status === 200) {
      this.props.history.push("/")
    } else {
      this.setState({ registerFailed: true })
    }
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half">
          {this.state.registerFailed ? <div>Login failed</div> : null}
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

          <div className="field is-grouped">
            <div className="control">
              <button onClick={this.handleOnLogin} className="button is-success">Login</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}