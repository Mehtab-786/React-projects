import React from 'react'

import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()
    
  return (
    <div className='w-full h-fit p-3 bg-green-900 text-white font-serif text-3xl'>
      User: {userid}
    </div>
  )
}

export default User
