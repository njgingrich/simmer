import * as React from 'react'
import { connect } from 'react-redux'
import { fetchGameInfo } from '../actions'

import GameCard, { GameCardProps, GameCardOwnProps } from '../components/game-card'
import { State } from '../components/app'

class Container extends React.Component<any, any> {
  componentDidMount () {
    console.log('mounted component')
    const { dispatch, id } = this.props
    dispatch(fetchGameInfo(id))
  }

  render () {
    console.log('rendering container w/ props:', this.props)
    return (
      <GameCard description={this.props.description}
                image_url={this.props.image_url}
                name={this.props.name}
                screenshots={this.props.screenshots} />
    )
  }
}

const mapStateToProps = (state: State, ownProps: GameCardOwnProps) => {
  const { gameInfo } = state
  let game = gameInfo[ownProps.id]
  if (game === undefined) {
    game = {
      name: '',
      image_url: '',
      description: '',
      screenshots: []
    }
  }
  console.log('game:', game)

  return {
    name: game.name,
    image_url: game.image_url,
    description: game.description,
    screenshots: game.screenshots,
  }
}

export default connect<GameCardProps, void, GameCardOwnProps>(
  mapStateToProps,
)(Container)
