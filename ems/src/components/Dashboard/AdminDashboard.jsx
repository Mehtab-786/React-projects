import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'

function AdminDashboard(props) {
  
  
  return (
    <div className='w-full h-screen  bg-neutral-900 text-white py-2 px-5 sm:py-7 sm:px-20'>
      <Header changeUser = {props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
