import * as React from 'react'
import '../styles/game-card.scss'

export interface GameCardProps {
  description: string
  image_url: string
  name: string
  playtime: {
    two_weeks: number,
    forever: number
  }
  screenshots: string[]
}

export interface GameCardOwnProps {
  app_id: string
  profile_id: string
}

const GameCard = ({description, image_url, name, playtime, screenshots}: GameCardProps) => {
  return (
    <div className={'game-card card'}>
      <img src={image_url} className={'game-card--image'}/>
      <div className={'card-body'}>
        <div className={'game-card--description'}>
          {description}
        </div>
      </div>
      <div className={'card-footer'}>
        <div className={'game-card--playtimes'}>
          <div className={'game-card--time'}>
            <span>Last Two Weeks</span>
            <span>{playtime.two_weeks}</span>
          </div>
          <div className={'game-card--time'}>
            <span>Forever</span>
            <span>{playtime.forever}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard
