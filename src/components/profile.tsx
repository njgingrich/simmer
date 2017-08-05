import * as React from 'react'
import '../styles/profile.scss'

export interface ProfileProps {
  isFetching: boolean
  last_logoff: string
  profile_url: string
  avatar_url: string
  name: string
}

export interface ProfileOwnProps {
  id: string
}

const Profile = ({avatar_url, isFetching, last_logoff, name, profile_url}: ProfileProps) => {
  let avatar = null
  if (isFetching) {
    avatar = <div className={'profile--avatar'} />
  } else {
    avatar = <img src={avatar_url} className={'profile--avatar'} />
  }

  return (
    <div className={'profile'}>
      {avatar}
      <div className={'profile--info'}>
        <span className={'profile--name'}>{name}</span>
        <span className={'profile--last-logoff'}>{last_logoff}</span>
      </div>
    </div>
  )
}

export default Profile
