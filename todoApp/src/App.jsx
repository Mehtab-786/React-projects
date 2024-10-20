import { useState } from 'react'


function App() {

  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  // const [currentTime, setCurrentTime] = useState("")
  const [mainTask, setMainTask] = useState([])
  // const [completed, setCompleted] = useState(false)

  
  
  const submitHandler = (e) => {
    e.preventDefault()

    if (!task || !desc) {
      alert("Please fill in both fields before submitting.");
      return;
    }

    const currentTime = new Date();
    const time = `${currentTime.getHours()}h:${currentTime.getMinutes()}m:${currentTime.getSeconds()}s`;
  
    setMainTask([...mainTask,{task,desc,time, completed:false}])
    
    setDesc("")
    setTask("")
  }
  
  const deleteHandler = (idx) => {
    const copiedTask = [...mainTask]
    copiedTask.splice(idx,1)
    setMainTask(copiedTask)
  }

  // const toggle = (idx) => {
  //   const updatedTask = [...mainTask]
  //   updatedTask[idx].completed = !updatedTask[idx].completed    
  //   setMainTask(updatedTask)
  // }
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
                <h4 className={`mx-20 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gradient-to-r ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.time}</h4>

                <button className='bg-red-500 text-xl py-1 px-3 rounded-lg' onClick={() => {return deleteHandler(idx)}}>Delete</button>

            </li>
    })
  }

  
  return (
   <>
   <div className='w-full h-screen bg-neutral-800 text-blue-400'>

    <h1 className='text-center  text-7xl text-gray-40'>iTask</h1>

    <div className='w-4/5 mx-auto'>
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
