import { useState } from "react"
import UserContext from "./useContext"


function useProvider({children}) {
    const [User, setUser] = useState()
    
    return <UserContext.Provider value={{User,setUser}}>
        {children}
    </UserContext.Provider>

}
export default useProvider