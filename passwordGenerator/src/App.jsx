import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null)    //initial value null

  const passwordGenerator = useCallback(() => { // useCallback for memorisation/optimisation

    let pass = ""
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(char) str += ":<>?*&%$#@!"
    
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length + 1)
      let char = str.charAt(random)
      pass += char      
    }
    setPassword(pass)

  }, [length, number, char])


  useEffect(() => {       //useEffect to running function if dependencies changes
    passwordGenerator()
  }, [length, number, char, passwordGenerator])


  const copyToClipboard = useCallback(() => {   //hook for optimisation
    passwordRef.current?.select() //effect of copying
    // passwordRef.current?.setSelectionRange(0,2) range
    navigator.clipboard.writeText(password)
  }, [password])




  return (
  <div className="bg-gray-900 h-screen w-full flex justify-center align-top p-14"> 
    <div className='bg-slate-600 h-fit rounded-lg max-w-md w-9/12 p-4 '>

      <div className='flex justify-between w-full rounded-xl overflow-hidden'>
        <input type="text" placeholder="password" className=" w-full px-4 py-2"  readOnly  value={password} ref={passwordRef} />
        <button className="bg-blue-500 text-white font-bold rounded px-4 py-2" onClick={copyToClipboard}>Copy </button>
      </div>

      <div className='flex justify-around w-full'>
          <div className='flex  items-center gap-1 pt-2'>
            <input id="range" type="range" min={6} max={50} className="bg-gray-200 rounded-lg cursor-pointer" 
            value={length} 
            onChange={(e) => {setLength(e.target.value)}}            
            />
            <label htmlFor="range" className="text-white font-medium ml-1">Length: {length}</label>
          </div>
          <div className='flex items-center  pt-2'>
            <input id="checkbox" type="checkbox" className="h-4 w-4 text-blue-600 rounded cursor-pointer" 
              defaultChecked={number}
              value={number}
              onChange={() => {
                setNumber((previous) => !previous)
              }}
              />
            <label htmlFor="checkbox" className="text-white font-medium ml-1">Number</label>
          </div>
          <div className='flex items-center  pt-2'>
            <input id="check" type="checkbox" className="h-4 w-4 text-blue-600 rounded cursor-pointer" 
              defaultChecked={char}
              value={char}
              onChange={() => {
                setChar((previous) => !previous)
              }}
              />
            <label htmlFor="check" className="text-white font-medium ml-1">Character</label>
          </div>

      </div>
      
    </div>
  </div>
  )
}

export default App
