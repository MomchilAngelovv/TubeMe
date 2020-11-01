import React from 'react'
import { connect } from 'react-redux'

class VideoDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Video name: {this.props.video.id}</h1>
        <p>Video Url: {this.props.video.videoUrl}</p>
        <p>Created On: {this.props.video.createdOn}</p>
      </React.Fragment>
    )
  }
}

let mapStateToProps = (state, props) => {
  let videoId = props.match.params.videoId

  return {
    video: state.videos.find(v => v.id == videoId)
  }
}

export default connect(mapStateToProps)(VideoDetails)