import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/RootReducer'

import App from './App'

let baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
let rootComponent = document.getElementById('root')

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App></App>
    </BrowserRouter>
  </Provider>,
  rootComponent
)
