import React, { Component } from 'react';
import Video from './Video'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          id: 1,
          imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg?quality=90&resize=960%2C872",
          number: 10
        },
        {
          id: 2,
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
          number: 20
        }
      ],
      value: 0
    };
  }

  renderVideos = () => {
    return this.state.videos.map(video =>
      <Video key={video.id} onValueChange={this.handleValueChange} video={video} />
    )
  }

  handleValueChange = (newNumber, video) => {
    let videoIndex = this.state.videos.indexOf(video);
    let newVideoArray = this.state.videos;
    newVideoArray[videoIndex].number = newNumber;

    this.setState({ videos: newVideoArray, value: newVideoArray.reduce((a, b) => a.number + b.number) });
  }
  render() {
    return (
      <React.Fragment>
        {this.renderVideos()}
        <hr />
        <div>{this.state.value}</div>
        <button onClick={(e) => this.props.onSum(e, this.state.videos.reduce((v1, v2) => v1.number + v2.number)) }>Set sum value to navbar</button>
      </React.Fragment>
    );
  }
}
