import { createSlice } from "@reduxjs/toolkit";

let RegisteredUsersSlice=createSlice({
    name:"registeredUsers",
    initialState:{
        allregister:JSON.parse(localStorage.getItem("registeredUsers"))||[]
    },
    reducers:{
         adduser:(state,action)=>{
            state.allregister.push(action.payload)
            localStorage.setItem("registeredUsers",JSON.stringify(state.allregister))
         }
    }
})
export let {adduser}=RegisteredUsersSlice.actions
export default RegisteredUsersSlice.reducer