import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
    <h1 className="text-3xl font-bold underline"> Starting Learning about context api </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
