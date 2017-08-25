import * as React from 'react'
import { connect } from 'react-redux'
import { fetchGameInfo } from '../actions/game-info'

import GameCard, { GameCardProps, GameCardOwnProps } from '../components/game-card'
import { State } from '../components/app'

class Container extends React.Component<any, any> {
  componentDidMount() {
    const { dispatch, app_id } = this.props
    dispatch(fetchGameInfo(app_id))
  }

  render() {
    return (
      <GameCard
        description={this.props.description}
        image_url={this.props.image_url}
        name={this.props.name}
        playtime={this.props.playtime}
        screenshots={this.props.screenshots}
      />
    )
  }
}

function convertTime(time: number) {
  if (time === -1) return ''

  const minutes = time % 60
  const hours = (time - minutes) / 60
  return `${hours}h ` + (minutes > 0 ? `${minutes}m` : ``)
}

const mapStateToProps = (state: State, ownProps: GameCardOwnProps): GameCardProps => {
  const { gameInfo, recentGames } = state
  let game = gameInfo[ownProps.app_id]
  let recentInfo = recentGames[ownProps.profile_id]
  if (game === undefined) {
    game = {
      name: '',
      image_url: '',
      description: '',
      screenshots: [],
    }
  }
  let two_weeks =
    recentInfo === undefined || recentInfo.list[ownProps.app_id] === undefined
      ? -1
      : recentInfo.list[ownProps.app_id].two_weeks
  let forever =
    recentInfo === undefined || recentInfo.list[ownProps.app_id] === undefined
      ? -1
      : recentInfo.list[ownProps.app_id].forever

  two_weeks = convertTime(two_weeks)
  forever = convertTime(forever)

  return {
    name: game.name,
    playtime: {
      two_weeks,
      forever,
    },
    image_url: game.image_url,
    description: game.description,
    screenshots: game.screenshots,
  }
}

export default connect<GameCardProps, void, GameCardOwnProps>(mapStateToProps)(Container)
