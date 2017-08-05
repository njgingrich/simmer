import * as React from 'react'
import '../styles/profile.scss'

export interface ProfileProps {
  profile_url: string
  avatar_url: string
  name: string
}

export interface ProfileOwnProps {
  id: string
}

const Profile = ({avatar_url, name, profile_url}: ProfileProps) => {
  console.log('rendering profile component')

  return (
    <div className={'profile'}>
      <img src={avatar_url} className={'profile--avatar'} />
      <span className={'profile--name'}>{name}</span>
    </div>
  )
}

export default Profile
