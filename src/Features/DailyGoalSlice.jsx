import {createSlice} from '@reduxjs/toolkit'
let DailyGoalSlice=createSlice({
    name:"dailygoal",
    initialState:{
        dailygoal:JSON.parse(localStorage.getItem("dailygoal"))||[],
        completegoal:JSON.parse(localStorage.getItem("completegoal"))||[],
        count:JSON.parse(localStorage.getItem("count"))||[],
        completed:JSON.parse(localStorage.getItem("completed"))||[]
    },
    reducers:{
       addGoal:(state,action)=>{
           state.dailygoal.push(action.payload)
           localStorage.setItem("dailygoal",JSON.stringify(state.dailygoal))
       },
       isComplete:(state,action)=>{
         state.dailygoal=state.dailygoal.map((e)=>{
           if(e.goalname==action.payload.goalname){ 
            let update={...e,isCompleted:!(action.payload.isCompleted)}
            if(!action.payload.isCompleted){
                state.completegoal.push(update)
                localStorage.setItem("completegoal",JSON.stringify(state.completegoal))
                let find=state.completed.find((e)=>e.username==action.payload.createdby)
                find.completed++;
                 localStorage.setItem("completed",JSON.stringify(state.completed))
            }
            else{
                let findelem=state.completegoal.find((e)=>e.goalname==action.payload.goalname)
                if(findelem){
                    state.completegoal=state.completegoal.filter((e)=>e.goalname!=findelem.goalname)
                    localStorage.setItem("completegoal",JSON.stringify(state.completegoal))
                    let find=state.completed.find((e)=>e.username==action.payload.createdby)
                find.completed--;
                 localStorage.setItem("completed",JSON.stringify(state.completed))
                }
            }
            return update
        }
           return e;
         })
           localStorage.setItem("dailygoal",JSON.stringify(state.dailygoal))
       },
       removegoal:(state,action)=>{
          state.dailygoal=state.dailygoal.filter((e)=>e.goalname!=action.payload.goalname)
          let findelem=state.completegoal.find((e)=>e.goalname==action.payload.goalname)
                if(findelem){
                    state.completegoal=state.completegoal.filter((e)=>e.goalname!=findelem.goalname)
                      localStorage.setItem("completegoal",JSON.stringify(state.completegoal))
                         let find=state.completed.find((e)=>e.username==action.payload.createdby)
                   find.completed--;
                  localStorage.setItem("completed",JSON.stringify(state.completed))
                }

            localStorage.setItem("dailygoal",JSON.stringify(state.dailygoal))
        
       },
       addcount:(state,action)=>{
          let find=state.count.find((e)=>e.username==action.payload)
          if(!find){
            state.count.push({username:action.payload,count:1});
            localStorage.setItem("count",JSON.stringify(state.count))
            return
          }
          find.count++;
          localStorage.setItem("count",JSON.stringify(state.count))
       },
       removeCount:(state,action)=>{
          let find=state.count.find((e)=>e.username==action.payload)
          find.count--;
          localStorage.setItem("count",JSON.stringify(state.count))
       },
       addcompleteCount:(state,action)=>{
         let find=state.completed.find((e)=>e.username==action.payload.createdby)
         if(!find){
             state.completed.push({username:action.payload,completed:0})
             localStorage.setItem("completed",JSON.stringify(state.completed))
         }
       }
    }
})

export let {addGoal,isComplete,removegoal,addcount,removeCount,addcompleteCount}=DailyGoalSlice.actions;
export default DailyGoalSlice.reducer;