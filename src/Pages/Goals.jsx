import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import { addcount, addGoal } from '../Features/DailyGoalSlice'
import {ToastContainer,toast} from 'react-toastify'

const Goals = () => {

    let navigate = useNavigate()
    let {singleUser}=useSelector((state)=>state.singleUser)

    let [goal,setGoal]=useState({
        goalname:"",
        isCompleted:false,
        createdby:singleUser.username
    })

    let dispatch=useDispatch()

    let {dailygoal,count,completed}=useSelector((state)=>state.goal)

    let find=count.find((e)=>e.username===singleUser.username)
    let com=completed.find((e)=>e.username==singleUser.username)
const progress = find && find.count > 0 
  ? (com?.completed || 0) / find.count * 100 
  : 0;

    return (

<div className='min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 relative py-10 px-4 sm:px-6 lg:px-5 overflow-hidden'>
{/* background */}

<div className='absolute inset-0 opacity-20'>
<div className='absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
<div className='absolute top-1/2 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
<div className='absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000'></div>
</div>

{/* close */}

<button
onClick={() => navigate("/")}
className='group absolute right-4 sm:right-6 lg:right-8 top-4 sm:top-6 lg:top-8 px-4 sm:px-6 py-2 sm:py-3 text-white font-medium bg-red-600/90 hover:bg-red-700 backdrop-blur-sm border border-red-500/50 rounded-xl cursor-pointer'
>
Close
</button>

{/* title */}

<h1 className="absolute top-6 left-4 sm:left-6 text-2xl sm:text-3xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
Daily Goals
</h1>

{/* main layout */}

<div className='flex flex-col lg:flex-row gap-6 h-auto lg:h-[85%] mt-24'>

{/* left side */}

<div className='w-full lg:w-[65%] flex flex-col gap-6'>

{/* input */}

<div className='backdrop-blur-xl w-full bg-white/5 border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl'>

<div className='flex flex-col sm:flex-row gap-3 items-stretch sm:items-center'>

<input
value={goal.goalname}
name="goalname"
onChange={(e)=>{
setGoal({...goal,[e.target.name]:e.target.value})
}}
className='flex-1 text-white placeholder-white/70 outline-none text-lg ring-2 ring-purple-500/50 rounded-2xl px-4 py-3'
type="text"
placeholder='What will you achieve today?'
/>

<button
onClick={()=>{
if(goal.goalname==""){
toast.warn("Empty goal input...")
return
}

dispatch(addGoal(goal))
toast.success("Goal added successfully")

setGoal({
goalname:"",
isCompleted:false,
createdby:singleUser.username
})

dispatch(addcount(singleUser.username))
}}

className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold'
>

Add Goal

</button>

</div>
</div>

{/* goals */}

{
dailygoal.length!=0 ?
<div className='flex flex-col gap-3 p-4 sm:p-5 border-2 border-white/20 rounded-2xl max-h-[70vh] overflow-y-auto'>
    <Outlet/>
</div>

:

<div className='flex border-2 border-white/20 rounded-2xl flex-1 items-center justify-center py-12 opacity-80'>

<div className='text-center'>

<div className='w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center'>
✨
</div>

<p className='text-white/80 text-lg font-medium'>
Add goals for today!
</p>

</div>

</div>

}

</div>

{/* right side */}

<div className='w-full lg:w-[35%] flex  flex-col gap-5 h-fit'>

{/* progress */}

<div className='backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-6 sm:p-6 shadow-2xl'>

<h3 className='text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
Progress Overview
</h3>

<div>

<p className='text-white/70 text-sm uppercase mb-2'>
Completed
</p>

<div className='w-full bg-white/10 rounded-full h-5'>

<div
className='bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full'
style={{width:`${progress}%`}}
>

</div>

</div>

<p className='text-2xl font-black text-white mt-2'>
{com?.completed}/{find?find.count:0}
</p>

</div>

</div>

{/* actions */}

<div className='backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl'>

<h3 className='text-lg sm:text-xl font-bold mb-18 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
Quick Actions
</h3>

<div className='space-y-4'>

<button
onClick={()=>navigate("/home/goals")}
className='w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-2xl font-semibold'
>
All Tasks
</button>

<button
onClick={()=>navigate("/home/goals/completedtasks")}
className='w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-2xl font-semibold'
>
Completed Tasks
</button>

<button
onClick={()=>navigate("/home/goals/pendingtasks")}
className='w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-2xl font-semibold'
>
Pending Tasks
</button>

</div>

</div>

</div>

</div>

</div>
)
}

export default Goals