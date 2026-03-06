import { createSlice } from "@reduxjs/toolkit";

let SingleUserSlice=createSlice({
    name:"singleuser",
    initialState:{
        singleUser:JSON.parse(localStorage.getItem("loggedUser")),
    },
    reducers:{
        setSingleUser:(state,action)=>{
            state.singleUser=action.payload;
            localStorage.setItem("loggedUser",JSON.stringify(state.singleUser))
        },
        removeUser:(state)=>{
            state.singleUser=null
            localStorage.removeItem("loggedUser")
        }
    }
})

export let {setSingleUser,removeUser}=SingleUserSlice.actions
export default SingleUserSlice.reducer
