import * as React from 'react'
import '../styles/game-list.scss'

import GameCard from '../containers/game-card'

export interface GameListProps {
  ids: {app_id: string, profile_id: string}[]
}

export interface GameListOwnProps {
  id: string // of the user
}

const GameList = ({ids}: GameListProps) => {
  const cards = ids.map(id => {
    return(
      <GameCard app_id={id.app_id} profile_id={id.profile_id} key={id.app_id} />
    )
  })
  return (
    <div className={'game-list'}>
      {cards}
    </div>
  )
}

export default GameList
