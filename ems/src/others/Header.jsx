import React from 'react'

function Header(props) {
  const logout = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  
// console.log(props.data.firstName)

  return (
    <div className='w-full flex justify-between items-center text-2xl '>
      <div>
        <h1>Hello  <br />
          <span className='font-bold text-3xl'> {props.data?.firstName ? props.data.firstName : 'Admin'}  👋👋</span>
          
          </h1></div>
      <div><button className='bg-red-500 py-2 px-4 rounded-lg text-white' onClick={logout}>Logout</button></div>
    </div>
  )
}

export default Header


