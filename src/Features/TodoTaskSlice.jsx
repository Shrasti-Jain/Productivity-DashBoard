import { createSlice } from "@reduxjs/toolkit";

let TodoTaskSlice=createSlice({
    name:"todo",
    initialState:{
         todo:JSON.parse(localStorage.getItem("ToDoTasks"))||[]
    },
    reducers:{
         addtodotask:(state,action)=>{
           state.todo.push(action.payload);
           localStorage.setItem("ToDoTasks",JSON.stringify(state.todo))
        },
        removetodotask:(state,action)=>{
            let update=state.todo.filter((val)=>val.taskname!=action.payload.taskname)
            state.todo=update
            localStorage.setItem("ToDoTasks",JSON.stringify(state.todo))
        }
    }
})

export let {addtodotask,removetodotask}=TodoTaskSlice.actions
export default TodoTaskSlice.reducer
