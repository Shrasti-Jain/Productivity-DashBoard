import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const Pomodoro = () => {
    let navigate=useNavigate()
    let [min,setMin]=useState(25)
    let [sec,setSec]=useState(0)
    let [isrunning,setIsrunning]=useState(false)
    const intervalRef = useRef(null)
    
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])
    
    let timerId =()=>{
        if(isrunning) return
        setIsrunning(true)
        intervalRef.current=setInterval(() => {
            setSec((prev) => {
                if (prev === 0) {
                    setMin((p) => {
                        if (p === 0) {
                            clearInterval(intervalRef.current)  
                            setIsrunning(false)
                            return 0
                        }
                        return p - 1
                    })
                    return 59
                }
                return prev - 1
            })
        }, 1000)
    } 
    
    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 sm:p-6 lg:p-10 relative overflow-hidden'>
            {/* Background glow */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-xl'></div>
            
            {/* Close Button - Responsive */}
            <button 
                onClick={() => navigate("/")} 
                className='group absolute right-4 sm:right-6 lg:right-8 top-4 sm:top-6 lg:top-8 z-20 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg text-white font-medium bg-red-600/90 hover:bg-red-700 backdrop-blur-sm border border-red-500/50 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-red-500/25'
            >
                <span className='flex items-center gap-1 sm:gap-2'>
                    <svg className='w-4 h-4 sm:w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                    <span className='hidden sm:inline'>Close</span>
                </span>
            </button>

            {/* Title - Responsive */}
            <div className='relative z-10 pt-24 sm:pt-28 lg:pt-5 max-w-10xl mx-auto mb-8 sm:mb-12'>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight text-center lg:text-left">
                    Study With Me!
                </h1>
            </div>

            {/* Timer Container - Responsive & Centered */}
            <div className='relative  z-10 flex-1 flex items-center justify-center min-h-[60vh]'>
               <div className='w-full max-w-lg sm:max-w-xl lg:max-w-2xl bg-gray-800/50 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300'>

                    
                    {/* Session Type */}
                    <div className='text-center mb-6 sm:mb-8'>
                        <button className='bg-gradient-to-r from-emerald-500/90 to-teal-500/90 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 border border-emerald-400/30'>
                            Work Session
                        </button>
                    </div>

                    {/* Timer Display - Large & Responsive */}
                    <div className='flex items-center justify-center mb-8 sm:mb-12'>
                        <h1 className='font-mono text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-2xl tracking-wide select-none'>
                            {min > 9 ? min : `0${min}`}:
                            {sec > 9 ? sec : `0${sec}`}
                        </h1>
                    </div>

                    {/* Control Buttons - Responsive Grid */}
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center'>
                        <button 
                            onClick={timerId}
                            disabled={isrunning}
                            className='flex-1 sm:w-auto bg-gradient-to-r from-blue-500/90 to-cyan-500/90 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 border border-blue-400/30 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg'
                        >
                            <svg className='w-5 h-5 sm:w-6' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd' />
                            </svg>
                            Start
                        </button>

                        <button 
                            onClick={()=>{
                                clearInterval(intervalRef.current)
                                setIsrunning(false)
                            }}
                            disabled={!isrunning}
                            className='flex-1 sm:w-auto bg-gradient-to-r from-orange-500/90 to-red-500/90 hover:from-orange-600 hover:to-red-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 border border-orange-400/30 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg'
                        >
                            <svg className='w-5 h-5 sm:w-6' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
                            </svg>
                            Pause
                        </button>

                        <button 
                            onClick={()=>{
                                clearInterval(intervalRef.current)
                                setIsrunning(false)
                                setMin(25)
                                setSec(0)
                            }}
                            className='flex-1 sm:w-auto bg-gradient-to-r from-gray-600/90 to-gray-700/90 hover:from-gray-700 hover:to-gray-800 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-gray-500/50 border border-gray-400/30 flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg'
                        >
                            <svg className='w-5 h-5 sm:w-6' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
                            </svg>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pomodoro
