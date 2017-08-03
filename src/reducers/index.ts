import { combineReducers } from 'redux'
import {
  LOAD_GAME_INFO,
  RELOAD_GAME_INFO,
  RECEIVE_GAME_INFO,
  REQUEST_GAME_INFO,
} from '../actions'

function loadingGameInfo (state = '570', action: any) {
  switch (action.type) {
    case LOAD_GAME_INFO:
      return action.id
    default:
      return state
  }
}

function info (
  state = {
    isFetching: false,
    didInvalidate: false,
    games: []
  },
  action: any) {

  switch (action.type) {
    case RELOAD_GAME_INFO:
      return Object.assign({}, state, {
        didInvalidate: true,
      })
    case REQUEST_GAME_INFO:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
    case RECEIVE_GAME_INFO:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        games: action.info,
        last_updated: action.received_at,
      })
    default:
      return state
  }
}

function gameInfo (state = {}, action: any) {
  switch (action.type) {
    case RELOAD_GAME_INFO:
    case RECEIVE_GAME_INFO:
    case REQUEST_GAME_INFO:
      return Object.assign({}, state, {
        [action.id]: info(state[action.id], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  loadingGameInfo,
  gameInfo
})

export default rootReducer