import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    
  return (
    <div className='bg-neutral-700 p-4 rounded-md'>
        <h2>Login</h2>

        <input type="text" placeholder='usernamee' 
        value={username}
        className='m-3 rounded-lg p-2'
        onChange={(e) => setUsername(e.target.value) }/>

        <input type="text" placeholder='password' 
        value={password}
        className='m-3 rounded-lg p-2'
        onChange={(e) => setPassword(e.target.value) }/>


        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
