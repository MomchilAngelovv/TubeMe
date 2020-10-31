import React from 'react'
import axios from 'axios'

export default class VideoDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      video: null
    }
  }

  async componentDidMount() {
    let { videoId } = this.props.match.params

    let response = await axios({
      method: 'get',
      baseURL: `https://localhost:44367/api/videos/${videoId}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.setState({ video: response.data })
  }

  render() {
    return (
      this.state.video ? (
        <React.Fragment>
          <h1>Video name: {this.state.video.id}</h1>
          <p>Video Url: {this.state.video.videoUrl}</p>
          <p>Created On: {this.state.video.createdOn}</p>
        </React.Fragment>
      ) : (
          <div>Loading video details...</div>
        )
    )
  }
}