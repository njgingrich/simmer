import {
  LOAD_GAME_LIST,
  RELOAD_GAME_LIST,
  RECEIVE_GAME_LIST,
  REQUEST_GAME_LIST,
} from '../actions/game-list'

function list(
  state = {
    isFetching: false,
    didInvalidate: false,
    list: [],
  },
  action: any
) {
  switch (action.type) {
    case RELOAD_GAME_LIST:
      return Object.assign({}, state, {
        didInvalidate: true,
      })
    case REQUEST_GAME_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
    case RECEIVE_GAME_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        list: action.list,
      })
    default:
      return state
  }
}

export function recentGames(state = {}, action: any) {
  switch (action.type) {
    case RELOAD_GAME_LIST:
    case RECEIVE_GAME_LIST:
    case REQUEST_GAME_LIST:
      return Object.assign({}, state, {
        [action.id]: list(state[action.id], action),
      })
    default:
      return state
  }
}

export function recentGameIds(state = [], action: any) {
  switch (action.type) {
    case RECEIVE_GAME_LIST:
      return Object.assign({}, state, {
        list: action.game_ids,
      })
    default:
      return state
  }
}
