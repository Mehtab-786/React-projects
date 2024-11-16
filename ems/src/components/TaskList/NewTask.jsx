import React from 'react'

function NewTask({data}) {
  return (
    <div className='w-[318px] flex flex-col p-5 gap-5  bg-blue-400 h-full rounded-lg  flex-shrink-0 text-blue-900'>
    <div className='flex mb-3 justify-between items-center'>
        <h3 className='text-2xl font-bold'>{data.category}</h3>
        <h4 className='text-base'>{data.date}</h4>
    </div>
    <div className='mb-6 leading-4'>
    <h2 className='text-2xl mb-3 font-semibold'>{data.title}</h2>
    <p>{data.description}</p>
    </div>
    <div className='w-full'>
        <button className='w-full bg-blue-600 text-white p-2 font-semibold rounded-lg '>Accept Task</button>
</div>
</div>
  )
}

export default NewTask
