import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render() {
    return (
      <h1>Hello EDIKOI SI</h1>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Profile) 