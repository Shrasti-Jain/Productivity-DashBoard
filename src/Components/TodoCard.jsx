// TodoCard.jsx - Perfect Responsive (Same UI/colors/logic)
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChevronDown } from 'lucide-react';
import { removetodotask } from '../Features/TodoTaskSlice';

const TodoCard = ({elem}) => {
    let dispatch=useDispatch()
    let [open,setOpen]=useState(false)
    
    return (
        <div className='flex flex-col gap-2 sm:gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 lg:p-4 border border-white/30'>
            {/* Header - Responsive */}
            <div className='w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4 bg-slate-800 rounded-xl 
                border border-slate-700 flex flex-col sm:flex-row sm:items-center sm:justify-between 
                gap-3 sm:gap-0 hover:bg-slate-750 transition-all duration-300'>
                
                {/* Left Content */}
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center w-full sm:w-auto'>
                    <h1 className='text-base sm:text-lg lg:text-xl font-semibold text-white tracking-tight text-left sm:text-center lg:text-left'>
                        {elem.taskname}
                    </h1>
                    {elem.isImportant && (
                        <h5 className='bg-red-500 text-xs sm:text-sm lg:text-sm text-white rounded-lg px-2 py-0.5 sm:px-2 sm:py-1 whitespace-nowrap'>
                            imp
                        </h5>
                    )}
                </div>

                {/* Right Buttons - Responsive Stack */}
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto'>
                    <button 
                        className='px-3 sm:px-4 lg:px-5 py-2 text-xs sm:text-sm lg:text-sm cursor-pointer bg-green-600 hover:bg-green-700 
                            text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto'
                        onClick={()=>dispatch(removetodotask(elem))}
                    >
                        Mark as Completed
                    </button>
                    <button 
                        onClick={()=>setOpen(prev=>!prev)} 
                        className='cursor-pointer p-1 sm:p-2 flex items-center justify-center rounded-lg hover:bg-slate-700 transition-colors w-full sm:w-auto'
                    >
                        <ChevronDown className='w-4 h-4 sm:w-5 sm:h-5' />
                    </button>
                </div>
            </div>

            {/* Details - Responsive */}
            {open && (
                <div className='w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4 bg-slate-800 rounded-xl 
                    border border-slate-700 flex items-start hover:bg-slate-750 transition-all duration-300'>
                    <p className='text-sm sm:text-base text-slate-200 leading-relaxed'>
                        {elem.taskdetail}
                    </p>
                </div>
            )}
        </div>
    )
}

export default TodoCard
