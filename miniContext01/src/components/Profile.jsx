import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
    
  if (!user) return <div className='text-3xl'>no user</div>
  return <div className='text-3xl'>welcome {user.username}</div>
}

export default Profile
