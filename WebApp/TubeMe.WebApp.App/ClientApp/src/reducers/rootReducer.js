import { initialState } from './InitialStateModel'

let rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload };
    case "LOGOUT":
      return { ...state, currentUser: null, videos: null };
    case "SET_MY_VIDEOS":
      return { ...state, videos: action.payload };
    default:
      return state;
  }
}

export { rootReducer }