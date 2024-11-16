import React from 'react'

function NewTask({data}) {
  return (
    <div className='w-full sm:w-[318px] flex flex-col p-5 gap-4 sm:gap-5  bg-blue-400 sm:h-full h-auto rounded-lg flex-shrink-0 text-blue-900'>
    <div className='flex sm:mb-3 justify-between items-center'>
        <h3 className='sm:text-2xl text-xl font-bold'>{data.category}</h3>
        <h4 className='text-base'>{data.date}</h4>
    </div>
    <div className='mb-2 sm:mb-6 leading-3 sm:leading-4'>
    <h2 className='text-2xl sm:mb-3 font-semibold'>{data.title}</h2>
    <p>{data.description}</p>
    </div>
    <div className='w-full'>
        <button className='w-full bg-blue-600 text-white p-2 font-semibold rounded-lg '>Accept Task</button>
</div>
</div>
  )
}

export default NewTask
