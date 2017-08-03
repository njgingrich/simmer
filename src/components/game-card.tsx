import * as React from 'react'

export interface GameCardProps {
  name: string
  image_url: string
}

export default class GameCard extends React.Component<GameCardProps, any> {

  render () {
    return (
      <div>
        <img src={this.props.image_url} />
        <span>{this.props.name}</span>
      </div>
    )
  }
}
