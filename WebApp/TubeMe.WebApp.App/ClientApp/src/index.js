import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

let baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
let rootComponent = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App></App>
  </BrowserRouter>,
  rootComponent
)
