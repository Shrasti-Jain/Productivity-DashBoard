// Righttodo.jsx - Responsive (same UI/colors/logic)
import React from 'react';
import TodoCard from './TodoCard';
import { useSelector } from 'react-redux';

const Righttodo = () => {
    let {todo}=useSelector((state)=>state.todo)
    let {singleUser}=useSelector((state)=>state.singleUser)
    
    let filterData=todo.filter((elem)=>elem.createdby==singleUser.username)
    
    return (
        <div className='w-full lg:w-[60%] flex flex-col gap-3 sm:gap-4 overflow-auto rounded-2xl bg-slate-900 h-full lg:h-auto p-4 sm:p-6 lg:p-8 shadow-xl border border-blue-700 min-h-[400px]'>
            {
                filterData.length != 0 ? 
                filterData.map((elem,index)=>{
                    return <TodoCard key={index} elem={elem}/>
                }) : 
                <div className='flex flex-col items-center justify-center h-full text-center py-12'>
                    <div className='text-4xl sm:text-6xl mb-4'>📝</div>
                    <h1 className='text-xl sm:text-3xl lg:text-3xl font-bold text-slate-400 mb-2'>No tasks yet...</h1>
                    <p className='text-slate-500 text-sm sm:text-base'>Add your first task from the left panel</p>
                </div>
            }
        </div>
    );
};

export default Righttodo;
