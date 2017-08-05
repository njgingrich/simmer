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

import { fetchGameInfo } from './actions'
console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

console.log(store.dispatch(fetchGameInfo('570')))
setTimeout(() => {
  console.log('store:', store.getState())
}, 2000)

unsubscribe()
