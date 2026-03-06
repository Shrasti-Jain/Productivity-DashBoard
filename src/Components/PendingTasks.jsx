import React from 'react'
import { useSelector } from 'react-redux'
import GoalCard from './GoalCard'

const PendingTasks = () => {
    let {dailygoal}=useSelector((state)=>state.goal)
    let update=dailygoal.filter((e)=>e.isCompleted==false)
    let {singleUser}=useSelector((state)=>state.singleUser)
    let filterdata=update.filter((e)=>e.createdby==singleUser.username)
    
  return (
    <div className='w-full space-y-3 sm:space-y-4  h-100 overflow-auto '>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300 mb-4 sm:mb-6 text-center sm:text-left">
            Pending Tasks
        </h1>

        <div className='space-y-3 sm:space-y-4'>
            {
                filterdata.map((elem,i)=>{
                    return <GoalCard key={i} elem={elem}/>
                })
            }
        </div>
        
        {filterdata.length === 0 && (
            <div className='text-center py-12 sm:py-16 opacity-70'>
                <p className='text-base sm:text-lg font-medium text-gray-300'>No pending tasks. You are all caught up! 🚀</p>
            </div>
        )}
    </div>
  )
}

export default PendingTasks
