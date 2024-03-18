import React from 'react'

import {  useDispatch } from 'react-redux';
import { clearAllUser } from '../store/slices/UserSlice';
const DeleteAllUser = () => {

  const dispatch=useDispatch();


  const deleteAll=()=>{
    dispatch(clearAllUser());
  }
  return (
    <button onClick={()=>{
    deleteAll();
    }}>
      DeleteAllUser
    </button>
  )
}

export default DeleteAllUser
