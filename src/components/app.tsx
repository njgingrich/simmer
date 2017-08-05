import * as React from 'react'

import GameCard from '../containers/game-card'
import Profile from '../containers/profile'
import GameList from '../containers/game-list'

export interface AppProps {
  name: string
  user_id: string
}

export interface State {
  loadingGameInfo: string
  gameInfo: GameInfo[]
  profiles: Profile[]
  recentGameIds: string[]
  recentGames: RecentGame[]
}

export interface GameInfo {
  didInvalidate: boolean
  isFetching: boolean
  last_updated: Date
  name: string
  image_url: string
  description: string
  screenshots: string[]
}

export interface Profile {
  name: string
  avatar_url: string
  profile_url: string
}

export interface RecentGame {
  name: string
  two_weeks: number
  forever: number
}

export default class App extends React.Component<AppProps, any> {
  render () {
    return (
      <div className={'container'}>
        <div className={'card'}>
          <div className={'card-body'}>
            <Profile id={this.props.user_id} />
          </div>
        </div>
        <div className={'card'}>
          <div className={'card-header'}>
            <h3>Recent Games</h3>
          </div>
          <div className={'card-body'}>
            <GameList id={this.props.user_id} />
          </div>
        </div>
      </div>
    )
  }
}
