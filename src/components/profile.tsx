import * as React from 'react'
import '../styles/profile.scss'

export interface ProfileProps {
  avatar_url: string
  name: string
}

const Profile = ({avatar_url, name}: ProfileProps) => {
  return (
    <div className={'profile'}>
      <img src={avatar_url} className={'profile--avatar'} />
      <span className={'profile--name'}>{name}</span>
    </div>
  )
}

export default Profile
