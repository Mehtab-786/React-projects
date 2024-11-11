import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard(props) {
  // console.log(data)
  return (
    <div className='w-full h-screen bg-neutral-900 text-white py-10 px-20'>
      <Header changeUser={props.changeUser}  data = {props.data}/>
      <TaskListNumber data = {props.data}/>
      <TaskList data = {props.data}/>
    </div>
  )
}

export default EmployeeDashboard
