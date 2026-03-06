// TimerCard.jsx - Compact + More Task Space
import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react';
import PlannerTaskCard from './PlannerTaskCard';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, addtaskitems, isOpen } from '../Features/PlannerSlice';

const TimerCard = ({ elem }) => {
    let {alltasks}=useSelector((state)=>state.planner)
    let {singleUser}=useSelector((state)=>state.singleUser)
    let findobj=alltasks.find((e)=>e.time==elem)
    let filterdata=findobj?.tasks?.filter((e)=>e.createdby==singleUser.username) || []
    let dispatch=useDispatch() 
    
    return (
        <div className='border border-gray-700/50 bg-gray-850/80 rounded-xl p-2 sm:p-3 hover:border-blue-500/50 transition-all duration-200'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 sm:mb-3'>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto'>
                    <h3 className='text-sm sm:text-base font-semibold text-white truncate'>{elem}</h3>
                    <button 
                        onClick={()=>{ 
                            const task={
                                id: crypto.randomUUID(),
                                time:elem,
                                priority:"low",
                                taskname:"",
                                isCompleted:false,
                                createdby:singleUser.username
                            }
                            dispatch(addTask(task))
                            dispatch(isOpen({...findobj,isOpen:true}))
                        }} 
                        className='px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm rounded-lg font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0'
                    >
                        + Add Task
                    </button>
                </div>
                <button 
                    onClick={()=>dispatch(isOpen({...findobj,isOpen:!findobj?.isOpen}))}
                    className='p-1 sm:p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700/50 transition-all duration-200 self-start sm:self-auto ml-auto'
                >
                    <ChevronDown className='w-4 h-4 sm:w-5' />
                </button>
            </div>

            {findobj?.isOpen && filterdata.length > 0 && (
                <div className='space-y-2 max-h-48 overflow-auto scrollbar-thin scrollbar-thumb-gray-600/60 scrollbar-track-gray-800/30'>
                    {filterdata.map((e)=> <PlannerTaskCard key={e.id} elem={e} compact={true} />)}
                </div>
            )}
        </div>
    )
}

export default TimerCard
