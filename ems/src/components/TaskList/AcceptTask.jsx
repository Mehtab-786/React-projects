import React from 'react'

function AcceptTask({data}) {
  // console.log(data)
  return (
    <div className='w-full sm:w-[318px] flex flex-col p-5 gap-4 sm:gap-5 bg-yellow-400 text-yellow-800 h-auto sm:h-full rounded-lg  flex-shrink-0'>
        <div className='flex sm:mb-3 justify-between items-center'>
          <h3 className='sm:text-2xl text-xl font-bold'>{data.category}</h3>
          <h4 className='text-base'>{data.date}</h4>
        </div>
        <div className='sm:mb-6 mb-2 leading-3 sm:leading-4'>
          <h2 className='text-2xl sm:mb-3 font-semibold'>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className='flex justify-between text-white'>
          <button className='bg-green-600 p-2 rounded-lg font-semibold '>Mark as Completed</button>
          <button className='bg-red-600 p-2 rounded-lg font-semibold'>Mark as Failed</button>
        </div>
    </div>
  )
}

export default AcceptTask


