// PlannerTaskCard.jsx - Compact Mode + Responsive
import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { addtaskitems, removeitem } from '../Features/PlannerSlice'

const PlannerTaskCard = ({elem, compact=false}) => {
    let dispatch=useDispatch()
    
    return (
        <div className={`border border-gray-600/50 ${compact ? 'bg-gray-800/80' : 'bg-gray-800'} rounded-lg p-1.5 sm:p-2 ${compact ? 'sm:p-3' : 'sm:p-3'}`}>
            <div className='flex flex-col gap-1.5 sm:gap-2'>
                <div className='flex flex-col sm:flex-row gap-1.5 sm:gap-2'>
                    <select 
                        value={elem.priority} 
                        onChange={(e)=>dispatch(addtaskitems({...elem,priority:e.target.value}))} 
                        className={`bg-gray-700/80 border border-gray-600/50 text-white px-1.5 sm:px-2 py-1.5 rounded-lg text-xs sm:text-sm w-full sm:w-20 sm:w-24 h-9 sm:h-10 ${compact ? 'text-xs' : 'text-sm'}`}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Med</option>
                        <option value="high">High</option>
                    </select>
                    <input 
                        value={elem.taskname} 
                        onChange={(e)=>dispatch(addtaskitems({...elem,taskname:e.target.value}))}
                        type="text" 
                        placeholder='Enter task...' 
                        className='flex-1 bg-gray-750/50 border border-gray-600/50 text-white px-2 sm:px-3 py-1.5 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500/70 text-xs sm:text-sm h-9 sm:h-10 truncate'
                    />
                </div>
                <div className='flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start'>
                    {elem.isCompleted ? 
                        <button 
                            onClick={()=> dispatch(addtaskitems({...elem,isCompleted:false}))} 
                            className='bg-green-500/90 hover:bg-green-600 text-xs sm:text-sm text-white rounded px-1.5 sm:px-2 py-1 sm:py-1.5 whitespace-nowrap flex-1 sm:flex-none min-w-[70px]'
                        >
                            Completed
                        </button> :
                        <button 
                            onClick={()=> dispatch(addtaskitems({...elem,isCompleted:true}))} 
                            className='bg-blue-500/90 hover:bg-blue-600 text-xs sm:text-sm text-white rounded px-1.5 sm:px-2 py-1 sm:py-1.5 whitespace-nowrap flex-1 sm:flex-none min-w-[70px]'
                        >
                            Pending
                        </button>
                    }
                    <button 
                        onClick={()=>dispatch(removeitem(elem))} 
                        className='bg-red-500/90 hover:bg-red-600 text-xs sm:text-sm text-white rounded px-1.5 sm:px-2 py-1 sm:py-1.5 whitespace-nowrap flex-1 sm:flex-none min-w-[70px]'
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlannerTaskCard
