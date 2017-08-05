import * as React from 'react'

import GameCard from '../containers/game-card'
import Profile from '../containers/profile'

export interface AppProps {
  name: string
}

export interface State {
  loadingGameInfo: string
  gameInfo: GameInfo[]
  profiles: Profile[]
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

export default class App extends React.Component<AppProps, any> {
  render () {
    return (
      <div>
        <Profile id={'76561198042101272'} />
        <GameCard id={'570'} />
      </div>
    )
  }
}
