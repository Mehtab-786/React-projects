import React, { createContext, useState } from 'react'
import { setLocalStorage , getLocalStorage } from '../utils/localStorage'
import { useEffect } from 'react'

export const AuthContext = createContext()

function AuthProvider({children}) {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
      setLocalStorage()
      const {employees} = getLocalStorage()
      setUserData(employees)
    },[])

    // console.log(userData)

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
          {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider


