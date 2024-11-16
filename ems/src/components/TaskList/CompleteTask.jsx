import React from 'react'

function CompleteTask({data}) {
  return (
    <div className='w-full sm:w-[318px] flex flex-col p-5 gap-4 sm:gap-5  bg-[#9EDF9C] sm:h-full h-auto rounded-lg  flex-shrink-0 '>
        <div className='flex sm:mb-3 justify-between items-center'>
            <h3 className='sm:text-2xl text-[#526E48] text-xl font-bold'>{data.category}</h3>
            <h4 className='text-base text-[#526E48]'>{data.date}</h4>
        </div>
        <div className='mb-2 sm:mb-6 sm:leading-4 leading-3 text-[#526E48]'>
          <h2 className='text-2xl sm:mb-3 font-semibold'>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className='w-full'>
          <button className='w-full bg-[#526E48] text-white p-2 rounded-lg font-semibold'>Complete Task</button>
        </div>
  </div>
  )
}

export default CompleteTask
