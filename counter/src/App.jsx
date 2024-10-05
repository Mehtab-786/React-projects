import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  // let counter = 5
  
  const addValue = () => {
    if(counter > 9){
      setCounter(counter)
    } else {
      setCounter(counter + 1)
    }
  }
  
  const subtractValue = () => {
    if (counter < 1) {
      setCounter(counter)
    } else {
      setCounter(counter - 1)
    }
  }


  return (
    <>
    <h1 className="text-4xl font-bold underline font-mono">Counter : {counter}</h1>

    <button  className='m-4 text-2xl'
    onClick={addValue}
    >Increment</button> 
    <br />
    <button className='m-4 text-2xl' 
    onClick={subtractValue}
    >Decrement</button>

    </>
  )
}

export default App
