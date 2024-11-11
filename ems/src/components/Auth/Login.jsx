import React from 'react'
import { useState } from 'react'

function Login({handleLogin}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }
  
  
  return (
    <div className='w-full h-screen flex justify-center items-center bg-neutral-800 '>
      <div className='border py-5 px-10 border-green-400 rounded-2xl'>
        <form className='flex flex-col gap-6 p-10 justify-center items-center text-gray-400' onSubmit={submitHandler}>
            <input 
                type="email" 
                required
                placeholder='Enter your email...'
                className='px-9 py-4 rounded-2xl border-2 border-blue-600 text-2xl bg-transparent placeholder:text-gray-500 '
                value={email}
                onChange={e => setEmail(e.target.value) }
            />
            <input
                type="password" 
                required
                placeholder='Type your password...'
                className='px-9 py-4 rounded-2xl border-2 border-blue-600 text-2xl bg-transparent  placeholder:text-gray-500'
                value={password}
                onChange={e => setPassword(e.target.value) }
            />
            <button className='bg-green-500 border-2 border-blue-700 text-2xl py-3 px-10 font-normal rounded-2xl bg-transparent text-white'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
