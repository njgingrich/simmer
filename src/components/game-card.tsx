import * as React from 'react'
import '../styles/game-card.scss'

export interface GameCardProps {
  description: string
  image_url: string
  name: string
  screenshots: string[]
}

export interface GameCardOwnProps {
  id: string
}

const GameCard = ({description, image_url, name, screenshots}: GameCardProps) => {
  return (
    <div className={'game-card'}>
      <img src={image_url} className={'game-card--image'}/>
    </div>
  )
}

export default GameCard
