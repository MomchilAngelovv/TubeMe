import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { videosActions } from '../actions/videosActions'

class VideoDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalShow: false
    }
  }

  toggleModal = () => {
    this.setState({ modalShow: !this.state.modalShow })
  }

  delete = () => {
    axios({
      method: "delete",
      baseURL: `https://localhost:44367/api/videos/${this.props.video.id}`,
      headers: {
        'Authorization': `Bearer ${this.props.currentUser.accessToken}`
      }
    })
      .then((response) => {
        this.props.removeVideo(this.props.video.id)
      })
      .catch((response) => {
      })

    this.props.history.push('/')
  }

  render() {
    let { videoUrl, id, createdOn } = this.props.video
    return (
      <React.Fragment>
        <div className="row">
          <h1>{id} {createdOn}</h1>
          <Button color="danger" onClick={this.toggleModal}>Delete</Button>
          <Modal isOpen={this.state.modalShow} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Are you sure you want to delete this video?</ModalHeader>
            <ModalBody>
              Deleting this video will prevent from further recovery.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.delete}>Yes</Button>
              <Button color="secondary" onClick={this.toggleModal}>No</Button>
            </ModalFooter>
          </Modal>
          <iframe width="100%" height="700" title={videoUrl} src={videoUrl}></iframe>
        </div>
        <div id="modal1" class="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

let mapStateToProps = (state, props) => {
  let videoId = props.match.params.videoId

  return {
    currentUser: state.currentUser,
    video: state.videos.find(v => v.id === videoId)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removeVideo: (id) => dispatch(videosActions.removeVideo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetails)