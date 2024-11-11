import React from 'react'

function AcceptTask({data}) {
  // console.log(data)
  return (
    <div className='w-[318px] flex flex-col p-5  gap-5 bg-yellow-500 h-full rounded-lg  flex-shrink-0'>
        <div className='flex mb-3 justify-between items-center'>
          <h3 className='text-2xl font-bold'>{data.category}</h3>
          <h4 className='text-base'>{data.date}</h4>
        </div>
        <div className='mb-3  leading-4'>
          <h2 className='text-2xl mb-3 font-semibold'>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className='flex justify-between '>
          <button className='bg-green-600 p-2 rounded-lg font-semibold '>Mark as Completed</button>
          <button className='bg-red-600 p-2 rounded-lg font-semibold'>Mark as Failed</button>
        </div>
    </div>
  )
}

export default AcceptTask


