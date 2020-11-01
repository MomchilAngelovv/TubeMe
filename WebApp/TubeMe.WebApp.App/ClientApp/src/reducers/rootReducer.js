let initialState = {
  currentUser: null,
  videos: [
    { "id": "0cdeb830-cc6b-4463-8611-05b58b30b768", "videoUrl": "https://www.youtube.com/embed/tAGnKpE4NCI", "userId": "faac2efe7b134f57919aa402b1a4ca83", "user": null, "createdOn": "2020-10-28T10:42:34.8265939", "updatedOn": null, "deletedOn": null, "metaData": null },
    { "id": "fd590247-4b4a-4207-8bff-b60c7657c0cb", "videoUrl": "https://www.youtube.com/embed/tAGnKpE4NCI", "userId": "faac2efe7b134f57919aa402b1a4ca83", "user": null, "createdOn": "2020-10-28T10:43:13.1662671", "updatedOn": null, "deletedOn": null, "metaData": null },
    { "id": "92ae257d-cd61-4186-89c0-87dbb06d5a1e", "videoUrl": "https://www.youtube.com/embed/tgbNymZ7vqY", "userId": "faac2efe7b134f57919aa402b1a4ca83", "user": null, "createdOn": "2020-10-28T10:33:15.8795306", "updatedOn": null, "deletedOn": null, "metaData": null }
  ],
}

let rootReducer = (state = initialState, action) => {
  return state;
}

export { rootReducer }