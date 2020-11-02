let usersActions = {
  login: (currentUser) => {
    return {
      type: "LOGIN",
      payload: currentUser
    }
  },
  setMyVideos: (videos) => {
    return {
      type: "SET_MY_VIDEOS",
      payload: videos
    }
  }
}

export { usersActions }