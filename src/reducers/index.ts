import { combineReducers } from 'redux'
import { gameInfo, loadingGameInfo } from './game-info'
import { profiles, loadingProfile } from './profile'
import { recentGames, recentGameIds } from './game-list'

const rootReducer = combineReducers({
  loadingGameInfo,
  gameInfo,
  loadingProfile,
  profiles,
  recentGames,
  recentGameIds
})

export default rootReducer
