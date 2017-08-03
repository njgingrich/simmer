import * as React from 'react'
import '../styles/profile.scss'

export interface ProfileProps {
  name: string
  avatar_url: string
}

export default class Profile extends React.Component<ProfileProps, any> {

  render () {
    return (
      <div className={'profile'}>
        <img src={this.props.avatar_url} className={'profile--avatar'} />
        <span className={'profile--name'}>{this.props.name}</span>
      </div>
    )
  }
}
