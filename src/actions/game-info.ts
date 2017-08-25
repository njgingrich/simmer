import * as fetch from 'isomorphic-fetch'

export const LOAD_GAME_INFO = 'LOAD_GAME_INFO'
export const RELOAD_GAME_INFO = 'RELOAD_GAME_INFO'
export const REQUEST_GAME_INFO = 'REQUEST_GAME_INFO'
export const RECEIVE_GAME_INFO = 'RECEIVE_GAME_INFO'
export const ERR_GAME_INFO = 'ERR_GAME_INFO'

function loadGameInfo(id: string) {
  return { type: LOAD_GAME_INFO, id }
}

function reloadGameInfo(id: string) {
  return { type: RELOAD_GAME_INFO, id }
}

function requestGameInfo(id: string) {
  return { type: REQUEST_GAME_INFO, id }
}

function receiveGameInfo(id: string, json: any) {
  json = json.result
  return {
    type: RECEIVE_GAME_INFO,
    id,
    name: json.name,
    image: json.image,
    description: json.description,
    screenshots: json.screenshots,
    received_at: Date.now(),
  }
}

function errGameInfo(id: string, err: string) {
  return { type: ERR_GAME_INFO, id, err }
}

export function fetchGameInfo(id: string) {
  return (dispatch: any) => {
    dispatch(requestGameInfo(id))
    return fetch(`http://localhost:8003/games/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveGameInfo(id, json)), err => dispatch(errGameInfo(id, err)))
  }
}
