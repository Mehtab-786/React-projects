import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext)
  
  
  return (
    <div id='task' className='sm:mt-3 mt-2 w-full rounded-lg px-2 sm:py-3 py-1.5 h-[185px] sm:h-48 bg-neutral-800 '>
      <div className='py-1 mb-2 sm:px-8 px-2 rounded-lg text-base sm:text-lg flex justify-between border-2 border-red-500'>
        <h2 className=' sm:w-1/5'>Name</h2>
        <h3 className=' sm:w-1/5'>New Task</h3>
        <h3 className=' sm:w-1/5'>Active</h3>
        <h3 className=' sm:w-1/5'>Completed</h3>
        <h3 className=' sm:w-1/5'>Failed</h3>
      </div>

      <div id='task' className='overflow-auto h-[80%]'>
        {userData.map((employee, idx) => {   
          return <div key={idx} className='py-1 mb-2 px-2 sm:px-8 rounded-lg text-base sm:text-lg flex justify-between border border-green-800'>
          <h2 className=' sm:w-1/5'>{employee.firstName}</h2>
          <h3 className=' sm:w-1/5'>{employee.taskNumber.newTask}</h3>
          <h4 className=' sm:w-1/5'>{employee.taskNumber.active}</h4>
          <h4 className=' sm:w-1/5'>{employee.taskNumber.completed}</h4>
          <h4 className=' sm:w-1/5'>{employee.taskNumber.failed}</h4>
          
        </div>
        })}
      </div>
    </div>
  )
}

export default AllTask


