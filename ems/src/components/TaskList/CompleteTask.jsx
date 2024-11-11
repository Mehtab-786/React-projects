import React from 'react'

function CompleteTask({data}) {
  return (
    <div className='w-[318px] flex flex-col p-5 gap-5  bg-[#9EDF9C] h-full rounded-lg  flex-shrink-0 '>
        <div className='flex mb-3 justify-between items-center'>
            <h3 className='text-2xl text-[#526E48] font-bold'>{data.category}</h3>
            <h4 className='text-base text-[#526E48]'>{data.date}</h4>
        </div>
        <div className='mb-6 leading-4 text-[#526E48]'>
          <h2 className='text-2xl mb-3 font-semibold'>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className='w-full'>
          <button className='w-full bg-[#526E48] text-white p-2 rounded-lg font-semibold '>Complete Task</button>
        </div>
  </div>
  )
}

export default CompleteTask
