import * as fetch from 'isomorphic-fetch'

export const LOAD_GAME_INFO = 'LOAD_GAME_INFO'
export const RELOAD_GAME_INFO = 'RELOAD_GAME_INFO'
export const REQUEST_GAME_INFO = 'REQUEST_GAME_INFO'
export const RECEIVE_GAME_INFO = 'RECEIVE_GAME_INFO'

function loadGameInfo (id: string) {
  return { type: LOAD_GAME_INFO, id }
}

function reloadGameInfo (id: string) {
  return { type: RELOAD_GAME_INFO, id }
}

function requestGameInfo (id: string) {
  return { type: REQUEST_GAME_INFO, id }
}

function receiveGameInfo (id: string, json: string) {
  return {
    type: RECEIVE_GAME_INFO,
    id,
    info: json,
    received_at: Date.now(),
  }
}

function fetchGameInfo (id: string) {
  return (dispatch: any) => {
    dispatch(requestGameInfo(id))
    return fetch(`localhost:8003/games/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveGameInfo(id, json)))
  }
}
