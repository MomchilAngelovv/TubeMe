import React, { Component } from 'react';

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 'Monkata' };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('user', 'monk');

    let data = {
      username: "Monkata",
      password: "123456",
      repeatPassword: "123456"
    }

    let response = await (await fetch(`https://localhost:44367/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    })).json();

    console.log(response)

    this.props.history.push('/');
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
                <button className="button is-link" onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
