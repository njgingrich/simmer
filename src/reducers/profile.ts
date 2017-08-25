import { LOAD_PROFILE, RELOAD_PROFILE, REQUEST_PROFILE, RECEIVE_PROFILE } from '../actions/profile'

export function loadingProfile(state = '', action: any) {
  switch (action.type) {
    case LOAD_PROFILE:
      return action.id
    case RECEIVE_PROFILE:
      return -1
    default:
      return state
  }
}

function profile_info(
  state = {
    isFetching: false,
    didInvalidate: false,
    name: '',
    profile_url: '',
    avatar_url: '',
    last_updated: '',
  },
  action: any
) {
  switch (action.type) {
    case RELOAD_PROFILE:
      return Object.assign({}, state, {
        didInvalidate: true,
      })
    case REQUEST_PROFILE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
    case RECEIVE_PROFILE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        name: action.name,
        profile_url: action.profile_url,
        avatar_url: action.avatar_url,
        last_logoff: action.last_logoff,
      })
    default:
      return state
  }
}

export function profiles(state = {}, action: any) {
  switch (action.type) {
    case RELOAD_PROFILE:
    case RECEIVE_PROFILE:
    case REQUEST_PROFILE:
      return Object.assign({}, state, {
        [action.id]: profile_info(state[action.id], action),
      })
    default:
      return state
  }
}
