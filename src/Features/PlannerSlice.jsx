import {createSlice} from '@reduxjs/toolkit'

let PlannerSlice=createSlice({
    name:"planner",
    initialState:{
        alltasks:JSON.parse(localStorage.getItem("alltasks"))||[
            {
                time:"5:00 - 6:00 AM",
                tasks:[],
                isOpen:false
            },
              {
                time:"6:00 - 7:00 AM",
                tasks:[],
                isOpen:false
            },
         {
                time:"7:00 - 8:00 AM",
                tasks:[],
                isOpen:false
            },
         {
                time:"8:00 - 9:00 AM",
                tasks:[],
                isOpen:false
            },
         {
                time:"9:00 - 10:00 AM",
                tasks:[],
                isOpen:false
            }, {
                time:"10:00 - 11:00 AM",
                tasks:[],
                isOpen:false
            },
            {
                time:"11:00 - 12:00 PM",
                tasks:[],
                isOpen:false
            },
            {
                time:"12:00 - 1:00 PM",
                tasks:[],
                isOpen:false
            },
            {
                time:"1:00 - 2:00 PM",
                tasks:[],
                isOpen:false
            },{
                time:"2:00 - 3:00 PM",
                tasks:[],
                isOpen:false
            },
            {
                time:"3:00 - 4:00 PM",
                tasks:[],
                isOpen:false
            },
            {
                time:"4:00 - 5:00 PM",
                tasks:[],
                isOpen:false
            },{
                time:"5:00 - 6:00 PM",
                tasks:[],
                isOpen:false
            },{
                time:"6:00 - 7:00 PM",
                tasks:[],
                isOpen:false
            },{
                time:"7:00 - 8:00 PM",
                tasks:[],
                isOpen:false
            },
            {
                time:"8:00 - 9:00 PM",
                tasks:[],
                isOpen:false
            },{
                time:"9:00 - 10:00 PM",
                tasks:[],
                isOpen:false
            },
            {
                time:"10:00 - 11:00 PM",
                tasks:[],
                isOpen:false
            },
        ]
    },
    reducers:{
       addTask:(state,action)=>{
         let findelem=state.alltasks.find((e)=>e.time==action.payload.time)
         findelem.tasks.push(action.payload)
         localStorage.setItem("alltasks",JSON.stringify(state.alltasks))
       },
       addtaskitems:(state,action)=>{
          let findelem=state.alltasks.find((e)=>e.time==action.payload.time)
          let updatedtasks=findelem.tasks.map((e)=>{
            if(e.id==action.payload.id){
                return action.payload
            }
            return e
          })
          findelem.tasks=updatedtasks
           localStorage.setItem("alltasks",JSON.stringify(state.alltasks))
       },
       removeitem:(state,action)=>{
            let findelem=state.alltasks.find((e)=>e.time==action.payload.time)
            let updatedtasks=findelem.tasks.filter((e)=>e.id!=action.payload.id)
          findelem.tasks=updatedtasks
           localStorage.setItem("alltasks",JSON.stringify(state.alltasks))
       },
       isOpen:(state,action)=>{
             let findelem=state.alltasks.find((e)=>e.time==action.payload.time)
             findelem.isOpen=action.payload.isOpen
       }
    }
})

export let {addTask,addtaskitems,removeitem,isOpen}=PlannerSlice.actions
export default PlannerSlice.reducer;