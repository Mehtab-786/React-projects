import { useEffect, useState } from 'react'


function App() {

  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState(() => {
    const savedTask = localStorage.getItem('tasks');
    return savedTask ? JSON.parse(savedTask) : []
  })
 
  
  const opt = {weekday : 'long'}
  const times = {hour:'2-digit',minute:'2-digit'};
  
   
  
  const submitHandler = (e) => {
    e.preventDefault()

    if (!task || !desc)  return alert("Please fill in both fields before submitting.");

    if (mainTask.some(t => t.task === task)) return alert('Task already exists!')
    

    const date = new Date();
    const time = `${date.toLocaleDateString('en-US',opt)},  ${date.toLocaleTimeString('en-US', times)}`
  
    setMainTask([...mainTask,{task,desc,time, completed:false}])
    
    setDesc("")
    setTask("")
  }
  
  const deleteHandler = (idx) => {
    const copiedTask = [...mainTask]
    copiedTask.splice(idx,1)
    setMainTask(copiedTask)
  }

  const toggle = (idx) => {
    const updatedTasks = [...mainTask];
    updatedTasks[idx].completed = !updatedTasks[idx].completed; // Toggle the completed status
    setMainTask(updatedTasks); // Update the mainTask state with the modified array
  };
  
  let renderTask = <h2 className='text-center text-2xl'>No task added</h2>
  
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, idx) => {
      
      return <li className=' w-full px-40 mx-auto bg-[#1A3636] flex justify-between items-center py-2 mb-2' key={idx} >

                <input type="checkbox" className='w-7 h-6 mr-16 ' checked={task.completed} onChange={() => toggle(idx)} />

                <div className='w-4/5 py-1 flex justify-between items-center  text-[#E2F1E7] mr-4'>
                <h4 className={`font-semibold text-2xl ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.task}
                </h4>       
                <h4 className={`font-thin text-lg align-middle ${task.completed ? 'line-through text-gray-500' : ''}`}>
                 {task.desc}
                 </h4>
                </div>
                <h4 className='mx-20 flex text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gradient-to-r'>{task.time}</h4>

                <button className='bg-red-500 text-xl py-1 px-3 rounded-lg' onClick={() => {return deleteHandler(idx)}}>Delete</button>

            </li>
    })
  }

  const reset = () => {
    setMainTask([])
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(mainTask))
  }, [mainTask])

  
  return (
   <>
   <div className='w-full h-screen bg-neutral-800 relative  text-blue-400'>

   <h1 className='text-center text-7xl text-zinc-300 font-semibold shadow-lg 
               text-shadow-md py-1' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
  iTask
</h1>


    <button className='absolute top-7 right-7 text-2xl text-white py-1 px-4 rounded-lg bg-red-500'
      onClick={reset}
    >Reset</button>

    <div className='w-4/5 mx-auto mt-10'>
      <form  onSubmit={submitHandler} className='flex justify-around px-32 py-7' >
        <input 
          type="text"
          placeholder='task'
          className='p-2 rounded-lg text-black'
          value={task}
          onChange={(element) => setTask(element.target.value) }
        />
        <input 
          type="text"
          placeholder='description'
          className='p-2 rounded-lg text-black'
          value={desc}
          onChange={(element) => setDesc(element.target.value) }
        />
        <button
          className='bg-blue-500 px-5 text-black font-semibold rounded-lg'
        >Add</button>

      </form>
    </div>

    <hr className='mb-9' />
    
    <div className='p-2 text-white'>
      <ul>
        {renderTask}
      </ul>
    </div>
   </div>
   </>
  )
}

export default App
