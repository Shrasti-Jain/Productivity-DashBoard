// Lefttodo.jsx - Responsive (same UI/colors/logic)
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ToastContainer,toast} from 'react-toastify'
import { addtodotask } from '../Features/TodoTaskSlice';

const Lefttodo = () => {
    let dispatch=useDispatch()
    let {singleUser} = useSelector((state)=>state.singleUser)
    let [task,setTask]=useState({
        taskname:"",
        taskdetail:"",
        isImportant:false,
        createdby:singleUser.username
    })

    let handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addtodotask(task))
        toast.success("Task added successfully")
        setTask({
            taskname:"",
            taskdetail:"",
            isImportant:false,
            createdby:singleUser.username
        })
    }

    let handleChange=(e)=>{
        if(e.target.name=='isImportant'){
            let update={...task,[e.target.name]:e.target.checked}
            setTask(update)
            return
        }
        let update={...task,[e.target.name]:e.target.value}
        setTask(update)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full lg:w-[40%] rounded-2xl bg-slate-900 h-full lg:h-auto flex flex-col p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6 shadow-xl border border-blue-700 min-h-[400px]">
            <input 
                value={task.taskname} 
                required 
                name='taskname' 
                onChange={handleChange}
                className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-800 rounded-xl border border-slate-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder:text-slate-400 text-white font-medium text-sm sm:text-base w-full"
                type="text"
                placeholder="Enter Task" 
            />

            <textarea 
                value={task.taskdetail} 
                required 
                name='taskdetail' 
                onChange={handleChange}
                rows={8} 
                className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-800 rounded-xl border border-slate-700 outline-none focus:ring-2 focus:ring-blue-500 resize-vertical transition-all duration-300 placeholder:text-slate-400 text-white font-medium text-sm sm:text-base w-full flex-1"
                placeholder="Enter Details"
            />

            <div className='flex items-center gap-3 sm:gap-4 p-2'>
                <input 
                    checked={task.isImportant} 
                    name='isImportant' 
                    onChange={handleChange} 
                    className='w-5 h-5 sm:w-6 sm:h-6 cursor-pointer text-blue-600'  
                    type="checkbox" 
                    id="mark"
                />
                <label className='text-base sm:text-xl cursor-pointer select-none' htmlFor="mark">
                    Mark as Important!
                </label>
            </div>

            <button
                type="submit"
                className="px-6 sm:px-8 py-3 sm:py-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] w-full"
            >
                Add Task
            </button>
        </form>
    );
};

export default Lefttodo;
