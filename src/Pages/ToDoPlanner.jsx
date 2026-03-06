// ToDoPlanner.jsx - Perfect Responsive (LG same, Mobile/Laptop changes)
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Lefttodo from '../Components/Lefttodo'
import Righttodo from '../Components/Righttodo'
import { ToastContainer } from 'react-toastify'

const ToDoPlanner = () => {
    let navigate = useNavigate()
    
    return (
        <div className='min-h-screen lg:max-h-screen lg:overflow-hidden w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] relative p-4 sm:p-6 lg:p-6 text-slate-100'>
            
            {/* Close Button Responsive */}
            <button 
                onClick={() => navigate("/")} 
                className='group absolute right-4 sm:right-6 lg:right-8 top-4 sm:top-6 lg:top-8 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg text-white font-medium bg-red-600/90 hover:bg-red-700 backdrop-blur-sm border border-red-500/50 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/25 z-20 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]'
            >
                <span className='flex items-center gap-1 sm:gap-2'>
                    <svg className='w-4 h-4 sm:w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                    <span className='hidden sm:inline'>Close</span>
                </span>
            </button>

            {/* Title Responsive */}
            <div className='pt-20 sm:pt-24 lg:pt-4'>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl mt-4 sm:mt-6 lg:mt-5 mb-6 sm:mb-8 lg:mb-10 font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight text-center lg:text-left">
                    Your Personalized Task List
                </h1>
            </div>

            {/* Responsive Layout */}
            <div className='w-full lg:h-[85vh] max-w-9xl mx-auto'>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 h-full lg:h-[80%]'>
                    <Lefttodo />
                    <Righttodo />
                </div>
            </div>
        </div>
    )
}

export default ToDoPlanner
