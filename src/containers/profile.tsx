import * as React from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'

import { fetchProfile } from '../actions/profile'
import Profile, { ProfileProps, ProfileOwnProps } from '../components/profile'
import { State } from '../components/app'

class Container extends React.Component<any, any> {
  componentDidMount() {
    const { dispatch, id } = this.props
    dispatch(fetchProfile(id))
  }

  render() {
    return (
      <Profile
        isFetching={this.props.isFetching}
        last_logoff={this.props.last_logoff}
        name={this.props.name}
        profile_url={this.props.profile_url}
        avatar_url={this.props.avatar_url}
      />
    )
  }
}

function convertToDate(time: string) {
  return moment(time, 'X').fromNow()
}

const mapStateToProps = (state: State, ownProps: ProfileOwnProps) => {
  const { profiles } = state
  let profile = profiles[ownProps.id]
  if (profile === undefined) {
    profile = {
      isFetching: true,
      last_logoff: -1,
      name: '',
      profile_url: '',
      avatar_url: '',
    }
  }

  return {
    isFetching: profile.isFetching,
    last_logoff: convertToDate(profile.last_logoff).toString(),
    name: profile.name,
    profile_url: profile.profile_url,
    avatar_url: profile.avatar_url,
  }
}

export default connect<ProfileProps, void, ProfileOwnProps>(mapStateToProps)(Container)
