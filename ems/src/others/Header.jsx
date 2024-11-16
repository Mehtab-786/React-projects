import React from 'react'

function Header(props) {
  const logout = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  
// console.log(props.data.firstName)

  return (
<div className="w-full flex flex-row justify-between items-center text-lg sm:text-2xl  sm:p-6 ">
  <div className="w-full sm:w-auto mb-4 sm:mb-0">
    <h1>
      Hello <br />
      <span className="font-bold text-xl sm:text-3xl">
        {props.data?.firstName ? props.data.firstName : "Admin"} 👋👋
      </span>
    </h1>
  </div>
  <div>
    <button
      className="bg-red-500 py-2 px-4 rounded-lg text-white text-sm sm:text-2xl"
      onClick={logout}
    >
      Logout
    </button>
  </div>
</div>

  )
}

export default Header



