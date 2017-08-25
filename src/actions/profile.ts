import * as fetch from 'isomorphic-fetch'
import { Action } from 'redux'

export const LOAD_PROFILE = 'LOAD_PROFILE'
export const RELOAD_PROFILE = 'RELOAD_PROFILE'
export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const ERR_PROFILE = 'ERR_PROFILE'

function loadProfile(id: string) {
  return { type: LOAD_PROFILE, id }
}

function reloadProfile(id: string) {
  return { type: RELOAD_PROFILE, id }
}

function requestProfile(id: string) {
  return { type: REQUEST_PROFILE, id }
}

function receiveProfile(id: string, json: any) {
  return {
    type: RECEIVE_PROFILE,
    id,
    name: json.display_name,
    last_logoff: json.last_logoff,
    profile_url: json.urls.profile,
    avatar_url: json.urls.avatar,
  }
}

function errProfile(id: string, err: string) {
  return { type: ERR_PROFILE, id, err }
}

export function fetchProfile(id: string) {
  return (dispatch: any) => {
    dispatch(requestProfile(id))
    return fetch(`http://localhost:8003/users/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveProfile(id, json)), err => dispatch(errProfile(id, err)))
  }
}
