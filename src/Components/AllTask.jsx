import React from 'react'
import { useSelector } from 'react-redux'
import GoalCard from './GoalCard'

const AllTask = () => {
    let {dailygoal}=useSelector((state)=>state.goal)
    let {singleUser}=useSelector((state)=>state.singleUser)
    let filterdata=dailygoal.filter((e)=>e.createdby==singleUser.username)
    
    return (
    <div className='w-full space-y-3 h-100 overflow-auto sm:space-y-4'>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-sky-300 via-blue-300 to-sky-400 bg-clip-text text-transparent drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300 mb-4 sm:mb-6 text-center sm:text-left">
            All Tasks
        </h1>

        {/* FIXED HEIGHT + SCROLL */}
        <div className='max-h-[500px] sm:max-h-[550px] lg:max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-gray-900/50 p-2 sm:p-4 space-y-3 sm:space-y-4'>
            {
                filterdata.map((elem,i)=>{
                    return <GoalCard key={i} elem={elem}/>
                })
            }
        </div>
        
        {filterdata.length === 0 && (
            <div className='text-center py-12 sm:py-16 opacity-70'>
                <p className='text-base sm:text-lg font-medium text-gray-300'>No tasks yet. Add some goals! ✨</p>
            </div>
        )}
    </div>
)

}

export default AllTask
