import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState(234)

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Mehtab-786')
    //     .then(res => res.json())
    //     .then(res => setData(res))
    
    // }, [])

    
  return (
    <div className='w-full h-fit p-3  flex flex-col justify-center items-center object-cover'>
      <h1 className='text-white bg-blue-900 font-serif m-2 text-4xl'> Github Followers: {data.followers} </h1>
      <img src={data.avatar_url}  className='max-w-md '/>
    </div>
  )
}

export default Github


export const githubLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/Mehtab-786')
    return response.json()
}
