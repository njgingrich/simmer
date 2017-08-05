import * as React from 'react'
import '../styles/game-list.scss'

import GameCard from '../containers/game-card'

export interface GameListProps {
  ids: string[]
}

export interface GameListOwnProps {
  id: string // of the user
}

const GameList = ({ids}: GameListProps) => {
  const cards = ids.map(id => <GameCard id={id} />)
  return (
    <div>{cards}</div>
  )
}

export default GameList
