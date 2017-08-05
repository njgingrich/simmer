import * as React from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../actions/profile'

import Profile, { ProfileProps, ProfileOwnProps } from '../components/profile'
import { State } from '../components/app'

class Container extends React.Component<any, any> {
  componentDidMount () {
    const { dispatch, id } = this.props
    dispatch(fetchProfile(id))
  }

  render () {
    console.log('rendering profile container w/ props:', this.props)
    return (
      <Profile name={this.props.name}
               profile_url={this.props.profile_url}
               avatar_url={this.props.avatar_url} />
    )
  }
}

const mapStateToProps = (state: State, ownProps: ProfileOwnProps) => {
  console.log('state:', state)
  const { profiles } = state
  let profile = profiles[ownProps.id]
  if (profile === undefined) {
    profile = {
      name: '',
      profile_url: '',
      avatar_url: '',
    }
  }
  console.log('profile:', profile)

  return {
    name: profile.name,
    profile_url: profile.profile_url,
    avatar_url: profile.avatar_url,
  }
}

export default connect<ProfileProps, void, ProfileOwnProps>(
  mapStateToProps,
)(Container)
