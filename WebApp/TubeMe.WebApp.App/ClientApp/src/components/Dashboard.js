import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends React.Component {
  handleOnInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCreateVideo = (e) => {
    e.preventDefault();
    console.log(1)
  }

  renderMyVideos = () => {
    if (this.props.videos) {
      return (
        <div className="row">
          {this.props.videos.map(video =>
            <div className="col s4">
              <div className="card">
                <div className="card-image">
                  <iframe key={video.id} width="100%" height="300" title={video.videoUrl}
                    src={video.videoUrl}>
                  </iframe>
                </div>
                <div className="card-content">
                  <p>Will put some additional text here.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    } else {
      return (
        <h3>You do not have any videos for now.</h3>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="center-align">My videos:</h1>
        <hr />
        {this.renderMyVideos()}
        <hr />
        <h1 className="center-align">Add video:</h1>
        <div className="row">
          <form className="col s12" onSubmit={this.handleCreateVideo}>
            <div className="row">
              <div class="input-field col s12">
                <input onChange={this.handleOnInputChange} name="videoUrl" placeholder="Video Url:" type="email" className="validate" />
                <label for="email">Video Url:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button type="submit" className="waves-effect waves-light btn">Add video</button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps)(Home)
