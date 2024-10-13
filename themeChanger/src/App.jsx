import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/themeBtn'
import Card from './components/card'

function App() {

  const [theme, setTheme] = useState("light")

  const darkTheme =() => {
    setTheme("dark")
  }

  const lightTheme =() => {
    setTheme("light")
  }
  
  useEffect(() => {
    let page = document.querySelector('html')
    page.classList.remove("light", "dark")
    page.classList.add(theme)
  }, [])
  

  return (    
<ThemeProvider value={{theme, darkTheme, lightTheme}}>


<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
</div>

</ThemeProvider>
  )
}

export default App
