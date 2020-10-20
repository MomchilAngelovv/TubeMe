﻿import React, { Component } from 'react';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

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

    localStorage.setItem('UserName', response.userEmail);
    localStorage.setItem('AccessToken', response.accessToken);

    this.props.onLogin(response.userEmail);
  }

  handleInputChange = (e) => {
    let target = e.target;
    let name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleGetData = async () =>{
    let response = await(await fetch(`https://localhost:44367/api/welcome/testdata`, {
      method: 'GEt',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('AccessToken') 
      },
    })).json();

    console.log(response)
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <h1>Hello {this.props.userEmail}</h1>
        <div className="columns">
          <div className="column is-half">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input name="email" type="text" onChange={(e) => this.handleInputChange(e)} placeholder="Email:" className="input" />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input name="password" type="text" onChange={(e) => this.handleInputChange(e)} placeholder="Password:" className="input" />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" onClick={(e) => this.handleSubmit(e)}>Login</button>
              </div>
            </div>
          </div>
        </div>
        <button onClick={this.handleGetData}>GetData</button>
      </React.Fragment>
    );
  }
}
