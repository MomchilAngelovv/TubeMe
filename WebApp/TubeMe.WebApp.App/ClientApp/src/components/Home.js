import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id:"faac2efe7b134f57919aa402b1a4ca83",
        email: "test@test.bg",
      },
      videos: [],
      videoUrl: "",
    }
  }

  async componentDidMount() {
    let allVideos = await this.getVideoList()
    this.setState({ videos: allVideos})
  }

  handleCreateVideo = async () => {
    let data = {
      videoUrl: this.state.videoUrl,
      userId: this.state.user.id
    }

    let response = await (await fetch('https://localhost:44367/api/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })).json();

    let allVideos = await this.getVideoList()
    this.setState({ videos: allVideos });
  }

  getVideoList = async () => {
    let response = await(await fetch('https://localhost:44367/api/videos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })).json();

    return response.data;
  }

  handleOnInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Logged user: {this.state.user.id} {this.state.user.email}</h1>
        <button>Increment</button>
        <hr />
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="field">
              <label className="label">VideoUrl</label>
              <div className="control">
                <input onChange={this.handleOnInputChange} name="videoUrl" type="text" placeholder="Video Url:" className="input" />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button onClick={this.handleCreateVideo} className="button is-success">Create video</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {this.state.videos.map(video =>
          <iframe key={video.id} width="420" height="315"
            src={video.videoUrl}>
          </iframe>
        )}
      </React.Fragment>
    );
  }
}
