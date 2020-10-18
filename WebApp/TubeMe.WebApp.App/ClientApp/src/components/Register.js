import React, { Component } from 'react';

export class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      repeatPassword: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email: this.state.email,
      password: this.state.password,
      repeatPassword: this.state.repeatPassword
    }

    let accesToken = localStorage.getItem('accessToken')
    await (await fetch(`https://localhost:44367/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accesToken
      },
      body: JSON.stringify(data)
    })).json();

    this.props.history.push('/login');
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

            <div className="field">
              <label className="label">Repeat password</label>
              <div className="control">
                <input name="repeatPassword" type="text" onChange={this.handleInputChange} placeholder="Repeat password:" className="input" />
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
