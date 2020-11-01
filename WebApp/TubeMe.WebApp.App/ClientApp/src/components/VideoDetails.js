import React from 'react'
import { connect } from 'react-redux'

class VideoDetails extends React.Component {
  render() {
    let { videoUrl, id, createdOn } = this.props.video
    return (
      <div className="row">
        <h1>{id} {createdOn}</h1>
        <iframe width="100%" height="700" title={videoUrl} src={videoUrl}></iframe>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  let videoId = props.match.params.videoId

  return {
    video: state.videos.find(v => v.id === videoId)
  }
}

export default connect(mapStateToProps)(VideoDetails)