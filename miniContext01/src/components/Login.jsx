import React, { useContext, useState } from 'react'
import userContext from '../context/useContext'

function Login() {
    const [Username, setUsername] = useState("")
    const {setUser} = useContext(userContext);

    const handleSubmit = () => setUser(Username)
    
  return (
    <div>
      <input placeholder='Username...' className='py-2 px-4 border-b ' value={Username} onChange={e => setUsername(e.target.value)} />
      <button onClick={handleSubmit} >Submit|</button>
    </div>
  )
}

export default Login