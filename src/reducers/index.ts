import { combineReducers } from 'redux'
import { gameInfo, loadingGameInfo } from './game-info'
import { profiles, loadingProfile } from './profile'

const rootReducer = combineReducers({
  loadingGameInfo,
  gameInfo,
  loadingProfile,
  profiles
})

export default rootReducer
