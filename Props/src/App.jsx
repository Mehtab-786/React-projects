import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
    <Card   location="Tezpur, India" btn ="Fake"/>    
    <Card   location="Texas, USA" details="Land nowhere to be found" btn ="Available"/>    
    </>
  )
}

export default App
