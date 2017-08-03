import * as React from 'react'
import '../styles/game-card.scss'

export interface GameCardProps {
  name: string
  image_url: string
}

export default class GameCard extends React.Component<GameCardProps, any> {

  render () {
    return (
      <div className={'game-card'}>
        <img src={this.props.image_url} className={'game-card--image'}/>
      </div>
    )
  }
}
