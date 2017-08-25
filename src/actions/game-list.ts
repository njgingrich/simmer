import * as fetch from 'isomorphic-fetch'

export const LOAD_GAME_LIST = 'LOAD_GAME_LIST'
export const RELOAD_GAME_LIST = 'RELOAD_GAME_LIST'
export const REQUEST_GAME_LIST = 'REQUEST_GAME_LIST'
export const RECEIVE_GAME_LIST = 'RECEIVE_GAME_LIST'
export const ERR_GAME_LIST = 'ERR_GAME_LIST'

function loadgameList(id: string) {
  return { type: LOAD_GAME_LIST, id }
}

function reloadgameList(id: string) {
  return { type: RELOAD_GAME_LIST, id }
}

function requestgameList(id: string) {
  return { type: REQUEST_GAME_LIST, id }
}

function receiveGameList(id: string, json: any) {
  json = json.result
  let list: any = {}
  json.forEach((item: any) => {
    list[item.app_id] = {
      name: item.name,
      two_weeks: item.two_weeks,
      forever: item.forever,
    }
  })
  return {
    type: RECEIVE_GAME_LIST,
    id,
    list,
    game_ids: json.map((item: any) => item.app_id),
  }
}

function errgameList(id: string, err: string) {
  return { type: ERR_GAME_LIST, id, err }
}

export function fetchGameList(id: string) {
  return (dispatch: any) => {
    dispatch(requestgameList(id))
    return fetch(`http://localhost:8003/users/${id}/recent`)
      .then(response => response.json())
      .then(json => dispatch(receiveGameList(id, json)), err => dispatch(errgameList(id, err)))
  }
}
