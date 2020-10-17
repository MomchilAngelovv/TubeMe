import React, { Component } from 'react';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('user', 'monk');

    let data = {
      email: this.state.email,
      password: this.state.password,
    }

    let response = await (await fetch(`https://localhost:44367/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })).json();

    console.log(response)

    //localStorage.setItem('AccessToken', response.accessToken)
    //localStorage.setItem('RefreshToken', response.refreshToken)

    this.props.history.push('/');
  }

  handleInputChange = (event) => {
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="columns">
          <div className="column is-half">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input name="email" type="text" onChange={this.handleInputChange} placeholder="Email:" className="input" />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input name="password" type="text" onChange={this.handleInputChange} placeholder="Password:" className="input" />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
