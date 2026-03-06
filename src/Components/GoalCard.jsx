import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isComplete, removeCount, removegoal } from '../Features/DailyGoalSlice'
import { useLocation } from 'react-router'

const GoalCard = ({elem}) => {
    let dispatch=useDispatch()
    let {singleUser}=useSelector((state)=>state.singleUser)
    let {pathname}=useLocation()
    
  return (
    <div className='backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group h-full'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 lg:gap-4'>
            <div className='flex items-center gap-2 sm:gap-3 lg:gap-4 flex-1 min-w-0'>
                {pathname=='/home/goals' && (
                    <input 
                        checked={elem.isCompleted} 
                        onChange={(e)=>{
                            dispatch(isComplete(elem))
                        }} 
                        type="checkbox"
                        className="
                            h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8
                            rounded-full
                            border-2 border-white
                            appearance-none
                            checked:bg-green-500
                            checked:border-green-500
                            cursor-pointer
                            transition-all duration-300
                            flex-shrink-0
                        "
                    />
                )}
                <div className='min-w-0 flex-1'>
                    {elem.isCompleted ? (
                        <h2 className='text-sm sm:text-base lg:text-xl font-bold line-through text-white leading-tight truncate'>
                            {elem.goalname}
                        </h2>
                    ) : (
                        <h2 className='text-sm sm:text-base lg:text-xl font-bold text-white leading-tight truncate'>
                            {elem.goalname}
                        </h2>
                    )}
                </div>
            </div>
            
            {pathname=='/home/goals' && (
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto lg:flex-shrink-0'>
                    {elem.isCompleted ? (
                        <button className='flex-1 sm:w-auto px-4 py-1.5 sm:px-5 sm:py-2 lg:px-6 lg:py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-emerald-600 text-white text-xs sm:text-sm lg:text-base rounded-lg lg:rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-emerald-400/30 backdrop-blur-sm'>
                            Done
                        </button>
                    ) : (
                        <button className='flex-1 sm:w-auto px-4 py-1.5 sm:px-5 sm:py-2 lg:px-6 lg:py-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white text-xs sm:text-sm lg:text-base rounded-lg lg:rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-blue-400/30 backdrop-blur-sm'>
                            Pending
                        </button>
                    )}
                    <button 
                        onClick={()=>{
                            dispatch(removegoal(elem))
                            dispatch(removeCount(singleUser.username))
                        }} 
                        className='px-4 py-1.5 sm:px-5 sm:py-2 lg:px-6 lg:py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-xs sm:text-sm lg:text-base rounded-lg lg:rounded-xl font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-red-500/30 backdrop-blur-sm cursor-pointer flex-shrink-0'
                    >
                        Remove
                    </button>
                </div>
            )}
        </div>
    </div>
  )
}

export default GoalCard
