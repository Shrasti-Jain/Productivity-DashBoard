// Planner.jsx - Better Responsive (Full tasks visible)
import React from 'react'
import { useNavigate } from 'react-router'
import TimerCard from '../Components/TimerCard';

const Planner = () => {
    let navigate = useNavigate()
    
    const morning = [
        "5:00 - 6:00 AM", "6:00 - 7:00 AM", "7:00 - 8:00 AM", "8:00 - 9:00 AM",
        "9:00 - 10:00 AM", "10:00 - 11:00 AM", 
    ];
    const afternoon = [
        "11:00 - 12:00 PM", "12:00 - 1:00 PM", "1:00 - 2:00 PM", 
        "2:00 - 3:00 PM", "3:00 - 4:00 PM", "4:00 - 5:00 PM",
    ];
    const evening = [
        "5:00 - 6:00 PM", "6:00 - 7:00 PM", "7:00 - 8:00 PM", 
        "8:00 - 9:00 PM", "9:00 - 10:00 PM", "10:00 - 11:00 PM"
    ];

    return (
        <div className='min-h-screen w-full bg-gray-900 text-white p-4 sm:p-6 relative'>
            {/* Close Button */}
            <button 
                onClick={() => navigate("/")} 
                className='absolute right-4 sm:right-6 lg:right-6 top-4 sm:top-6 lg:top-6 px-3 sm:px-4 py-2 text-sm sm:text-base lg:text-base bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 border border-red-500/50 z-20 shadow-lg hover:shadow-xl'
            >
                Close
            </button>

            {/* Header */}
            <div className='pt-20 sm:pt-24 lg:pt-5 max-w-8xl lg:px-5  mx-auto mb-8 sm:mb-12'>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight sm:text-center lg:text-start ">
                    Plan your Day
                </h1>
            </div>

            {/* FULL RESPONSIVE GRID - More Space for Tasks */}
            <div className='max-w-10xl mx-auto px-2 sm:px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-20 lg:pb-0'>
                    
                    {/* 🌅 Morning Column */}
                    <div className='bg-gray-800 border border-gray-700 rounded-2xl flex flex-col overflow-hidden hover:border-blue-500/50 transition-colors h-[500px] sm:h-[600px] lg:h-[75vh]'>
                        <div className='p-4 sm:p-5 lg:p-5 border-b border-blue-400/30 bg-gray-750 sticky top-0 z-10 flex-shrink-0'>
                            <h2 className='text-blue-400 font-bold text-lg sm:text-xl lg:text-xl flex items-center gap-2'>
                                🌅 Morning
                            </h2>
                        </div>
                        <div className='flex-1 overflow-auto p-4 sm:p-5 lg:p-5 space-y-2 sm:space-y-3 scrollbar-thin scrollbar-thumb-gray-600/80 scrollbar-track-gray-800/50 max-h-full'>
                            {morning.map((elem, idx) => <TimerCard key={idx} elem={elem} />)}
                        </div>
                    </div>

                    {/* ☀️ Afternoon Column */}
                    <div className='bg-gray-800 border border-gray-700 rounded-2xl flex flex-col overflow-hidden hover:border-yellow-500/50 transition-colors h-[500px] sm:h-[600px] lg:h-[75vh]'>
                        <div className='p-4 sm:p-5 lg:p-5 border-b border-yellow-400/30 bg-gray-750 sticky top-0 z-10 flex-shrink-0'>
                            <h2 className='text-yellow-400 font-bold text-lg sm:text-xl lg:text-xl flex items-center gap-2'>
                                ☀️ Afternoon
                            </h2>
                        </div>
                        <div className='flex-1 overflow-auto p-4 sm:p-5 lg:p-5 space-y-2 sm:space-y-3 scrollbar-thin scrollbar-thumb-gray-600/80 scrollbar-track-gray-800/50 max-h-full'>
                            {afternoon.map((elem, idx) => <TimerCard key={idx} elem={elem} />)}
                        </div>
                    </div>

                    {/* 🌙 Evening Column */}
                    <div className='bg-gray-800 border border-gray-700 rounded-2xl flex flex-col overflow-hidden hover:border-purple-500/50 transition-colors h-[500px] sm:h-[600px] lg:h-[75vh]'>
                        <div className='p-4 sm:p-5 lg:p-5 border-b border-purple-400/30 bg-gray-750 sticky top-0 z-10 flex-shrink-0'>
                            <h2 className='text-purple-400 font-bold text-lg sm:text-xl lg:text-xl flex items-center gap-2'>
                                🌙 Evening
                            </h2>
                        </div>
                        <div className='flex-1 overflow-auto p-4 sm:p-5 lg:p-5 space-y-2 sm:space-y-3 scrollbar-thin scrollbar-thumb-gray-600/80 scrollbar-track-gray-800/50 max-h-full'>
                            {evening.map((elem, idx) => <TimerCard key={idx} elem={elem} />)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Planner
