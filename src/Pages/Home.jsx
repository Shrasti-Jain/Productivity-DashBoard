import React from 'react';
import pomo from '../assets/pomo1.jpeg';
import goal from '../assets/Goal.png';
import { useNavigate } from 'react-router';
import cartoon from '../assets/cartoon1.png';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../Features/SingleUserSlice';

const Home = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let { singleUser } = useSelector((state) => state.singleUser);

    const handleLogout = () => {
        dispatch(removeUser());
        toast.warning("Logged out");
        navigate("/login");
    };

    return (
        <div className='min-h-screen w-full bg-gray-900 text-white p-4 sm:p-6 lg:p-10 space-y-6 lg:space-y-8'>
           
            
            {/* Welcome Card with Integrated Logout */}
         <div className='max-w-10xl mx-auto w-full px-4 sm:px-6 lg:px-1'>
    <div className='bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/30 shadow-2xl hover:shadow-[0_25px_80px_rgba(0,0,0,0.6)] hover:border-blue-400/40 transition-all duration-500 relative overflow-hidden'>
        
        {/* Mobile Background Pattern */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 lg:hidden blur-xl -z-10'></div>
        
        <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-between relative z-10'>
            
            {/* Left - Welcome + Profile - MOBILE STACKED */}
            <div className='w-full lg:w-auto flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 flex-1 min-w-0'>
                
                {/* Welcome Text */}
                <div className='w-full lg:flex-1 text-center lg:text-left'>
                    <h1 className='text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-white/95 via-blue-50/80 to-white/90 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)] mb-2 sm:mb-3 lg:mb-4 leading-tight tracking-tight'>
                        Hey{' '}
                        <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl font-black'>
                            {singleUser.username}
                        </span>
                        !
                    </h1>
                    <p className='text-base sm:text-lg lg:text-xl text-gray-100/90 font-medium bg-gradient-to-r from-gray-200/60 to-gray-300/60 bg-clip-text inline-block px-3 py-1.5 rounded-lg border border-white/20 shadow-md backdrop-blur-sm'>
                        Welcome back to Dashboard ✨
                    </p>
                </div>
                
                {/* Profile Image */}
                <div className='flex-shrink-0 mx-auto lg:mx-0'>
                    <div className='w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 relative group'>
                        <img 
                            className='w-full h-full object-cover rounded-2xl lg:rounded-3xl shadow-2xl border-4 border-white/40 hover:border-blue-400/60 transition-all duration-400 hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] cursor-default' 
                            src={cartoon} 
                            alt="Profile" 
                        />
                        <div className='absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-xl opacity-90 group-hover:opacity-100 transition-opacity duration-400 animate-pulse'></div>
                    </div>
                </div>
            </div>

            {/* Right - Logout Button - MOBILE CENTERED */}
            <div className='w-full lg:w-auto flex-shrink-0 mt-4 lg:mt-0'>
                <button 
                    onClick={handleLogout}
                    className='w-full lg:w-auto group relative flex items-center justify-center lg:justify-start gap-2 lg:gap-3 px-6 py-3 lg:px-8 lg:py-4 h-12 lg:h-auto bg-gradient-to-r from-red-600/95 to-red-700/95 hover:from-red-500/100 hover:to-orange-600/100 text-white font-bold rounded-2xl lg:rounded-3xl border-2 border-red-400/60 shadow-xl hover:shadow-2xl hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] transition-all duration-400 hover:-translate-y-1.5 hover:scale-[1.02] backdrop-blur-md overflow-hidden outline-0 text-sm lg:text-base'
                >
                    {/* Glow Effect */}
                    <div className='absolute outline-0 inset-0 bg-gradient-to-r from-red-400/50 to-orange-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10'></div>
                    
                    <svg className='w-5 h-5 lg:w-6 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                    </svg>
                    
                    <span className='hidden sm:inline font-black outline-0 tracking-wide'>Logout</span>
                </button>
            </div>
        </div>
    </div>
</div>



            {/* Tools Grid */}
            <div className='max-w-10xl mx-auto w-full'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6'>
    {/* Todo */}
    <div 
        className='group bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-500/10 hover:to-blue-600/10 rounded-3xl p-4 cursor-pointer border-2 border-gray-700/50 hover:border-blue-400/70 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl shadow-lg h-full'
        onClick={() => navigate("/home/todolist")}
    >
        <div className='w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden mb-3 sm:mb-4'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                 src="https://i.pinimg.com/736x/28/72/ab/2872ab54533f92fada4c381b5e9a0108.jpg" 
                 alt="Todo" />
        </div>
        <p className='font-bold text-sm sm:text-base md:text-lg lg:text-xl text-blue-400 text-center'>Todo List</p>
    </div>

    {/* Planner */}
    <div 
        className='group bg-gradient-to-br from-gray-800 to-gray-900 hover:from-emerald-500/10 hover:to-emerald-600/10 rounded-3xl p-4 cursor-pointer border-2 border-gray-700/50 hover:border-emerald-400/70 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl shadow-lg h-full'
        onClick={() => navigate("/home/planner")}
    >
        <div className='w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden mb-3 sm:mb-4'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                 src="https://i.pinimg.com/1200x/f9/c9/63/f9c963e02c3490fed7a14deb90b6271b.jpg" 
                 alt="Planner" />
        </div>
        <p className='font-bold text-sm sm:text-base md:text-lg lg:text-xl text-emerald-400 text-center'>Planner</p>
    </div>

    {/* Motivation */}
    <div 
        className='group bg-gradient-to-br from-gray-800 to-gray-900 hover:from-amber-500/10 hover:to-amber-600/10 rounded-3xl p-4 cursor-pointer border-2 border-gray-700/50 hover:border-amber-400/70 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl shadow-lg h-full'
        onClick={() => navigate("/home/motivation")}
    >
        <div className='w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden mb-3 sm:mb-4'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                 src="https://i.pinimg.com/736x/92/59/4b/92594beeb2bf2c578afeb01edb6d050e.jpg" 
                 alt="Motivation" />
        </div>
        <p className='font-bold text-sm sm:text-base md:text-lg lg:text-xl text-amber-400 text-center'>Motivation</p>
    </div>

    {/* Pomodoro */}
    <div 
        className='group bg-gradient-to-br from-gray-800 to-gray-900 hover:from-rose-500/10 hover:to-rose-600/10 rounded-3xl p-4 cursor-pointer border-2 border-gray-700/50 hover:border-rose-400/70 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl shadow-lg h-full'
        onClick={() => navigate("/home/pomodoro")}
    >
        <div className='w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden mb-3 sm:mb-4'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                 src={pomo} 
                 alt="Pomodoro" />
        </div>
        <p className='font-bold text-sm sm:text-base md:text-lg lg:text-xl text-rose-400 text-center'>Pomodoro</p>
    </div>

    {/* Goals */}
    <div 
        className='group bg-gradient-to-br from-gray-800 to-gray-900 hover:from-purple-500/10 hover:to-purple-600/10 rounded-3xl p-4 cursor-pointer border-2 border-gray-700/50 hover:border-purple-400/70 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl shadow-lg h-full'
        onClick={() => navigate("/home/goals")}
    >
        <div className='w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden mb-3 sm:mb-4'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                 src={goal} 
                 alt="Goals" />
        </div>
        <p className='font-bold text-sm sm:text-base md:text-lg lg:text-xl text-purple-400 text-center'>Goals</p>
    </div>
</div>

            </div>
        </div>
    );
};

export default Home;
