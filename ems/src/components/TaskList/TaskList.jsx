import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  return (
    <div className='h-[50%] w-full sm:h-[42%] flex flex-col sm:flex-row flex-nowrap gap-5 sm:gap-10 overflow-x-auto overflow-y-auto items-center mt-8 sm:mt-12 rounded-xl '>

      {data.tasks.map((elem, idx)=> {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem}/> 
        } 
        if (elem.newTask) {
          return <NewTask key={idx} data={elem}/> 
        }
        if(elem.completed) {
          return <CompleteTask key={idx} data={elem}/>
        } 
        if(elem.failed) {
          return <FailedTask key={idx} data={elem}/>
        } 

      })}
      
    </div>
  )
}

export default TaskList


