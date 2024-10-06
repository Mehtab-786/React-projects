import { useState } from 'react'


function App() {

  let [color, setColor] = useState("black")

  
  return (
    <main className='w-full h-screen flex justify-center ' style={{backgroundColor:color}}>
      <div className="fixed bottom-6  w-3/5  bg-gray-800 text-white text-center py-4 rounded-xl">
        <button onClick={() => setColor("red")} className='bg-red-600       px-4 py-3 mx-5 rounded-lg '>Red</button>
        <button onClick={() => setColor("blue")} className='bg-blue-600     px-4 py-3 mx-5 rounded-lg'>Blue</button>
        <button onClick={() => setColor("cyan")} className='bg-cyan-600     px-4 py-3 mx-5 rounded-lg'>Cyan</button>
        <button onClick={() => setColor("orange")} className='bg-orange-600 px-4 py-3 mx-5 rounded-lg'>Orange</button>
        <button onClick={() => setColor("gray")} className='bg-gray-600     px-4 py-3 mx-5 rounded-lg'>Gray</button>
        <button onClick={() => setColor("green")} className='bg-green-600   px-4 py-3 mx-5 rounded-lg'>Green</button>        
      </div>

    </main>
  )
}

export default App
