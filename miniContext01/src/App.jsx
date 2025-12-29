import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <div className='bg-neutral-800 text-white h-screen w-full flex flex-col gap-5  items-center justify-center'>
      <Login />
      <Profile />
    </div>
  )
}

export default App