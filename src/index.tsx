import * as React from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { render } from 'react-dom'

import reducer from './reducers'
import App from './components/app'

import './styles/styles.scss'

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <App name={'Simmer'} />
  </Provider>,
  document.getElementById('app')
)
