import React, { Component } from 'react';

export default class Video extends Component {
  handleOnClick = (e) => {
    let randomNumber = Math.floor(Math.random() * 10);

    this.setState({
      number: randomNumber
    })

    this.props.onValueChange(randomNumber, this.props.id)
  }

  render() {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={this.props.video.imgUrl} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{this.props.video.number}</p>
          <button onClick={(e) => this.handleOnClick(e)}> Change the value</button>
        </div>
      </div>
    )
  }
}