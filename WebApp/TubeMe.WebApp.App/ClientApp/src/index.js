import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { createStore } from 'redux'

let baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
let rootComponent = document.getElementById('root')

let initialState = {
  currentUser: {
    email: null,
    id: null,
    accessToken: null
  }
}

let reducer = (state = initialState, action) => {
  if (action.type === 'setCurrentUser') {
    let user = { ...state.currentUser }

    user.email = action.paylaod.email;
    user.id = action.paylaod.id;
    user.accessToken = action.paylaod.accessToken;

    state.currentUser = user;
  } else if (action.type === 'removeCurrentUser') {
    let user = { ...state.currentUser }

    user.email = null;
    user.id = null;
    user.accessToken = null;

    state.currentUser = user;
  }
  console.log(action, state)
}

let store = createStore(reducer)

let action = {
  type: 'setCurrentUser',
  paylaod: {
    email: 'A@abv.bg',
    id: '5',
    accessToken: 'aasdfasdfasd1313asdasd'
  }
}

setTimeout(() => { store.dispatch(action); }, 10000)

let action2 = {
  type: 'removeCurrentUser',
  paylaod: {
    email: null,
    id: null,
    accessToken: null
  }
}

setTimeout(() => { store.dispatch(action2); }, 20000)



ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App></App>
  </BrowserRouter>,
  rootComponent
)
