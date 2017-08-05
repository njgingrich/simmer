import * as React from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import { render } from 'react-dom'

import reducer from './reducers'
import App from './components/app'

import './styles/styles.scss'

// Typescript doesn't know about redux devtools but it does exist
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(reducer,
              composeEnhancers(
                applyMiddleware(thunkMiddleware)
              )
            )

render(
  <Provider store={store}>
    <App name={'Simmer'} user_id={'76561198042101272'} />
  </Provider>,
  document.getElementById('app')
)
