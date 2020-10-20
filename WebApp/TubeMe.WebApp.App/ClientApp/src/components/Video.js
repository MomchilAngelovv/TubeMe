import React, { Component } from 'react';

export default class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl: this.props.imageUrl,
      number: this.props.number
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={this.state.imageUrl} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{this.state.number}</p>
          <a href="/#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}