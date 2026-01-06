import {logout} from '../store/authSlice';
import {useDispatch} from 'react-redux';
import authService from '../appwrite/AuthService'

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        await authService.logoutAccount()
            .then( () => dispatch(logout()))
            .catch(err => console.log(err))
    }
    
  return (
    <button className='px-4 py-2 bg-red-700 text-black font-semibold text-xl' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn