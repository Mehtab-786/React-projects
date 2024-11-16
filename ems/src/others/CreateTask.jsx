import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
// localStorage.clear()

function CreateTask() {

    const [title, settitle] = useState('')
    const [date, setdate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    
    const [newtasks, setNewTasks] = useState({})

    const [userData, setUserData] = useContext(AuthContext)

    const submitHandling = (e) => {
        e.preventDefault()
        setNewTasks({active:false,newTask:true, completed:false, failed:false, title, date, description, category,})

        userData.forEach((elem) => {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newtasks)
                elem.taskNumber.newTasks = elem.taskNumber.newTasks + 1
            }          
        })
        setUserData(userData)

            
        setAsignTo('')
        setCategory('')
        setDescription('')
        settitle('')
        setdate('')
        
    }

    
  return (
    <div className='mt-3 sm:mt-6 w-full bg-neutral-800 sm:py-4 py-2 px-2 rounded-md sm:px-8 '>
        <form className='w-full flex flex-col sm:flex-row gap-2 sm:gap-10 items-center sm:items-stretch justify-between' onSubmit={(e) => {submitHandling(e)}}>
            <div className='flex flex-col justify-center gap-2 sm:gap-6 w-[90%] sm:w-2/4 '>
                <div className='w-full'>
                    <h4 className='mb-1'>Task Title</h4>
                    <input type="text" className='w-full px-1 py-1 bg-transparent border-2 border-zinc-200 rounded-md' placeholder='Task name' 
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                    />
                </div>
                <div className='w-full'>
                    <h4 className='mb-1'>Date</h4>
                    <input type="date" className='w-full px-1 py-1 bg-transparent border-2 border-zinc-200 rounded-md text-gray-400'
                        value={date}
                        onChange={(e) => setdate(e.target.value)}                        
                    />
                </div>
                <div className='w-full'>
                    <h4 className='mb-1'>Asign To</h4>
                    <input type="text" placeholder='Employee name' className='w-full px-1 py-1 bg-transparent border-2 border-zinc-200 rounded-md'
                        value={asignTo}
                        onChange={(e) => setAsignTo(e.target.value)}                    
                    />
                </div>
                <div className='w-full'>
                    <h4 className='mb-1'>Category</h4>
                    <input type="text" placeholder='design, dev, etc' className='w-full px-1 py-1 bg-transparent border-2 border-zinc-200 rounded-md'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}                    
                    />
                </div>
            </div>
            <div  className='flex flex-col items w-[90%] sm:w-2/4'>
                <h4 className='mb-1'>Description</h4>
                <textarea placeholder='Enter your description...' className='bg-transparent rounded-md border-2 border-zinc-200 h-full p-2'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}                
                ></textarea>
                <button className='w-full bg-green-600 py-2 rounded-md mt-3 text-xl'>Create Task</button>
            </div>
        </form>
  </div>
  )
}

export default CreateTask

