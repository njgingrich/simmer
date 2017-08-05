import * as React from 'react'

import GameCard from '../containers/game-card'
import Profile from './profile'

export interface AppProps {
  name: string
}

export interface State {
  loadingGameInfo: string
  gameInfo: GameInfo[]
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

export default class App extends React.Component<AppProps, any> {

  render () {
    return (
      <div>
        <Profile name={'syzygy'}
                 avatar_url={'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/91/91c95d85d26332c3528ed0a0a07428c134c60c1f_full.jpg'} />
        <GameCard id={'570'} />
      </div>
    )
  }
}
