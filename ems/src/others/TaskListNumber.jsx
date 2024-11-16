import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className='w-full'>
      <div className='w-full sm:h-3/5 mt-3 sm:mt-10 flex justify-between gap-3 sm:gap-0 flex-wrap sm:flex-nowrap'>
        <div className='p-2 h-20 sm:h-auto sm:p-5 w-[47%] sm:w-[22%] bg-blue-400 rounded-xl '>
            <h2 className='sm:text-2xl text-xl font-medium '>{data.taskNumber.newTask}</h2>
            <h3 className='text-lg sm:text-2xl font-medium sm:font-semibold'>New Task</h3>
        </div>
        <div className='p-2 h-20 sm:h-auto sm:p-5 w-[47%] sm:w-[22%] bg-green-600 rounded-xl overflow-hidden'>
            <h2 className='sm:text-2xl text-xl  font-medium '>{data.taskNumber.completed}</h2>
            <h3 className='text-lg sm:text-2xl font-medium sm:font-semibold'>Completed Task</h3>
        </div>
        <div className='p-2 h-20 sm:h-auto sm:p-5 w-[47%] sm:w-[22%] bg-yellow-400 rounded-xl '>
            <h2 className='sm:text-2xl text-xl  font-medium '>{data.taskNumber.active}</h2>
            <h3 className='text-lg sm:text-2xl font-medium sm:font-semibold'>Accept Task</h3>
        </div>
        <div className='p-2 h-20 sm:h-auto sm:p-5 w-[47%] sm:w-[22%] bg-red-500 rounded-xl '>
            <h2 className='sm:text-2xl text-xl  font-medium '>{data.taskNumber.failed}</h2>
            <h3 className='text-lg sm:text-2xl font-medium sm:font-semibold'>Failed Task</h3>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumber
