import * as React from 'react'

import GameCard from './game-card'
import Profile from './profile'

export interface AppProps {
  name: string
}

export default class App extends React.Component<AppProps, any> {

  render () {
    return (
      <div>
        <Profile name={'syzygy'}
                 avatar_url={'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/91/91c95d85d26332c3528ed0a0a07428c134c60c1f_full.jpg'} />
        <GameCard name={'Dota 2'}
                  image_url={'http://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1498154701'} />
      </div>
    )
  }
}
