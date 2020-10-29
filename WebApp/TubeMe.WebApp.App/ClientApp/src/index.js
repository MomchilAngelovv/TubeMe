import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

let baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
let rootComponent = document.getElementById('root')

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App></App>
    </BrowserRouter>,
  </Provider>,
  rootComponent
)
