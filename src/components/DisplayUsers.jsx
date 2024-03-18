import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';
const DisplayUsers = () => {
    const dispatch=useDispatch();

    const data=useSelector((state)=>{
        console.log(state.users);
        return state.users

    })

    console.log(data)

    const deleteUser=(id)=>{
        dispatch(removeUser(id))

    }
  return (
    
    data.map((user,id)=>{
        return <li key={id}>{user}
        <button className='btn btn-delete' onClick={()=>{deleteUser(id)}}>
            <MdDeleteForever className="delete-icon"/>
        </button>
        </li>
       
    })

    
   
  )
}

export default DisplayUsers
