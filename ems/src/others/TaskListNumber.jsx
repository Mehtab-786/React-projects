import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className='w-full'>
      <div className='w-full h-3/5 mt-10 flex  justify-between'>
        <div className='p-5 w-[22%] bg-blue-400 rounded-xl '>
            <h2 className='text-2xl  font-medium '>{data.taskNumber.newTask}</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='p-5 w-[22%] bg-green-600 rounded-xl '>
            <h2 className='text-2xl  font-medium '>{data.taskNumber.completed}</h2>
            <h3 className='text-2xl font-semibold'>Completed Task</h3>
        </div>
        <div className='p-5 w-[22%] bg-yellow-400 rounded-xl '>
            <h2 className='text-2xl  font-medium '>{data.taskNumber.active}</h2>
            <h3 className='text-2xl font-semibold'>Accept Task</h3>
        </div>
        <div className='p-5 w-[22%] bg-red-500 rounded-xl '>
            <h2 className='text-2xl  font-medium '>{data.taskNumber.failed}</h2>
            <h3 className='text-2xl font-semibold'>Failed Task</h3>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumber
