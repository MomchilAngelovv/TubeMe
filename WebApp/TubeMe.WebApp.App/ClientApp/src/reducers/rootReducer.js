import { initialState } from './InitialStateModel'

let rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload };
    case "LOGOUT":
      return { ...state, currentUser: null, videos: null };
    case "SET_MY_VIDEOS":
      return { ...state, videos: action.payload };
    case "ADD_VIDEO":
      let newVideos = [...state.videos]
      newVideos.push(action.payload);
      return { ...state, videos: newVideos };
    default:
      return state;
  }
}

export { rootReducer }