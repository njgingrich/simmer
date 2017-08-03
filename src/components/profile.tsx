import * as React from 'react'

export interface ProfileProps {
  name: string
  avatar_url: string
}

export default class Profile extends React.Component<ProfileProps, any> {

  render () {
    return (
      <div>
        <img src={this.props.avatar_url} width='64' height='64' />
        <span>{this.props.name}</span>
      </div>
    )
  }
}
