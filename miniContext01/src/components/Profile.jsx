import { useContext} from 'react'
import userContext from '../context/useContext'

function Profile() {
    const {User} = useContext(userContext);

    if (!User) return <h1 className='bg-neutral-700 font-semibold py-2 px-4'>No User Found</h1>
    
  return (
    <h1>{User} is here</h1>
  )
}

export default Profile