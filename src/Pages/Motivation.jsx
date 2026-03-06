import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { axiosInstance } from '../config/AxiosInstance'
import { useQuery } from '@tanstack/react-query'
import { getQuote } from '../apis/QuotesApi'

const Motivation = () => {
    const navigate = useNavigate()
    
    const { isPending, data } = useQuery({
        queryKey: ['quote'],
        queryFn: getQuote,
        staleTime: Infinity,
    });

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-slate-900 via-black to-blue-950 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12 relative overflow-hidden'>
            {/* Blue particle background - Responsive */}
            <div className='absolute inset-0 opacity-30'>
                <div className='absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 lg:w-72 lg:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute top-1/2 right-4 sm:right-20 w-56 sm:w-96 h-56 sm:h-96 lg:w-96 lg:h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute bottom-10 sm:bottom-20 left-1/2 w-52 sm:w-80 h-52 sm:h-80 lg:w-80 lg:h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000'></div>
            </div>

            {/* Close Button - Responsive */}
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

            {/* Premium Blue Glow Quote Box - Responsive */}
            <div className='relative max-w-2xl w-full mx-auto z-20 pt-20 sm:pt-24 lg:pt-12'>
                {/* Blue glow aura */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 blur-3xl opacity-40 animate-pulse rounded-2xl lg:rounded-3xl -z-10 shadow-[0_0_100px_rgba(59,130,246,0.4)]'></div>
                
                {/* Decorative quote mark - Responsive */}
                <div className='absolute -top-8 sm:-top-10 lg:-top-12 -left-4 sm:-left-6 text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 font-serif opacity-90 z-10 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse'>
                    “
                </div>

                <div className='bg-white/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-700 hover:-translate-y-3 relative overflow-hidden group hover:border-blue-400/50'>
                    {/* Blue shimmer overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-1000 -skew-x-12 -rotate-2 scale-150 blur-xl animate-pulse -z-0'></div>
                    
                    {
                        isPending ? 
                        <h1 className='text-xl sm:text-2xl lg:text-3xl text-blue-300 font-light text-center'>Loading your motivation...</h1> : 
                        <div className='text-center'>
                            <blockquote className='quote-text text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-serif text-white/95 leading-relaxed mb-6 sm:mb-8 lg:mb-12 relative z-20 drop-shadow-2xl bg-gradient-to-r from-transparent via-blue-300/20 to-transparent bg-clip-text'>
                                {data.quote}
                            </blockquote>
                            <cite className='author text-lg sm:text-xl lg:text-2xl font-semibold text-blue-300/95 block italic before:content-["—"] before:mr-2 sm:before:mr-3 before:text-blue-400 before:font-serif relative z-20'>
                                {data.author}
                            </cite>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Motivation
