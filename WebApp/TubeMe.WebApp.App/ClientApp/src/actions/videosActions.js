let videosActions = {
  createVideo: (video) => {
    return {
      type: "ADD_VIDEO",
      payload: video
    }
  },
  removeVideo: (id) => {
    return {
      type: "REMOVE_VIDEO",
      payload: {
        id 
      }
    }
  }
}

export { videosActions }