import * as React from 'react'
import { connect } from 'react-redux'
import { fetchGameInfo } from '../actions'

import { GameCard, GameCardProps } from '../components/game-card'
import { State, GameInfo } from '../index'

export interface GameCardContainerProps {
  description: string
  id: string
  image_url: string
  name: string
  screenshots: string[]
}

class GameCardContainer extends React.Component<GameCardContainerProps, {}> {
  componentDidMount () {
    const { dispatch, id }: any = this.props
    dispatch(fetchGameInfo(id))
  }

  componentDidUpdate (prevProps: any) {
    if (this.props.id !== prevProps.id) {
      const { dispatch, id }: any = this.props
      dispatch(fetchGameInfo(id))
    }
  }

  render () {
    return (
      <div>
        <GameCard image_url={this.props.image_url}
                  description={this.props.image_url}
                  name={this.props.image_url}
                  screenshots={this.props.screenshots} />
      </div>
    )
  }
}

const mapStateToProps = (state: State): GameCardProps => {
  const { loadingGameInfo, gameInfo } = state
  const game = gameInfo['570']
  return {
    name: game.name,
    image_url: game.image_url,
    description: game.description,
    screenshots: game.screenshots,
  }
}

export default connect<GameCardProps, void, void>(
  mapStateToProps,
)(GameCard)
