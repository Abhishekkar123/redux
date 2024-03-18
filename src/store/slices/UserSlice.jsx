//create the slice

import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    //name
    name:"user",
    //store data
    initialState:[],
    //make the action
    reducers:{
        addUser(state,action){
            console.log(state,action);
            state.push(action.payload)
        },
        removeUser(state,action){
            console.log("delete the icon",action.payload);
            state.splice(action.payload,1)

        },
        clearAllUser(state,action){
            console.log("hii")
            // return state=[];
            return [];
        },
    },      
})
console.log("userslice",userSlice.actions)
//export

export default userSlice.reducer;
export const    {addUser,removeUser,clearAllUser}=userSlice.actions;