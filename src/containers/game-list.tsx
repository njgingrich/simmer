import * as React from 'react'
import { connect } from 'react-redux'
import { fetchGameList } from '../actions/game-list'

import GameList, { GameListProps, GameListOwnProps } from '../components/game-list'
import { State } from '../components/app'

class Container extends React.Component<any, any> {
  componentDidMount () {
    const { dispatch, id } = this.props
    dispatch(fetchGameList(id))
  }

  render () {
    return (
      <GameList ids={this.props.ids} />
    )
  }
}

const mapStateToProps = (state: State, ownProps: GameListOwnProps) => {
  const { recentGameIds } = state
  let ids = recentGameIds['list'] || []
  return {
    ids
  }
}

export default connect<GameListProps, void, GameListOwnProps>(
  mapStateToProps,
)(Container)
