import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { usersActions } from '../actions/usersActions'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      wrongCredentials: false
    }
  }

  loginFormInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = (event) => {
    event.preventDefault();

    axios({
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
      .then((response) => {

        axios({
          method: 'get',
          baseURL: `https://localhost:44367/api/users/${response.data.id}/videos`
        })
          .then((videosResponse) => {
            this.props.setMyVideos(videosResponse.data.data)
          })
          .catch((response) => {
          })

        console.log(response)
        this.props.login(response.data)
        this.props.history.push('/')
      })
      .catch(() => {
        this.setState({ wrongCredentials: true })
      })
  }

  showWrongCredentials = () => {
    if (this.state.wrongCredentials) {
      return (
        <div>Invalid login credentials!</div>
      )
      return null
    }
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.login} className="col s12">
          <h1 className="center-align">Login</h1>
          <hr />
          {this.showWrongCredentials()}
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input onChange={this.loginFormInput} id="input-email" name="email" type="text" />
              <label htmlFor="input-email">Email</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">vpn_key</i>
              <input onChange={this.loginFormInput} id="input-password" name="password" type="password" />
              <label htmlFor="input-password">Password</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn col s6">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    login: (currentUser) => { dispatch(usersActions.login(currentUser)) },
    setMyVideos: (videos) => { dispatch(usersActions.setMyVideos(videos)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)