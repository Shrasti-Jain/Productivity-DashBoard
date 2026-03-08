import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adduser } from "../Features/RegisteredUsersSlice";

const Register = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { allregister } = useSelector((state) => state.alluser)
    const { reset, handleSubmit, register } = useForm();

    const handleFormSubmit = (data) => {
        let findelem = allregister.find((e) => e.username == data.username)
        if (findelem) {
            toast.error("Username already exist...")
            reset()
            return
        }
        toast.success("User registered successfully!!!");
        dispatch(adduser(data))
        navigate("/login")
        reset();
    };

    return (
        <>
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 
            flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-12 xl:p-16 overflow-auto">
            
            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-10 w-60 h-60 bg-rose-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Main Container */}
            <div className="w-full max-w-md lg:max-w-4xl lg:h-[75vh] relative z-10 
                flex flex-col lg:flex-row bg-white/5 backdrop-blur-2xl rounded-3xl 
                shadow-2xl border border-white/10 overflow-hidden mb-8 lg:mb-0">

                {/* Left Side - Welcome (Hidden on mobile, full on desktop) */}
                <div className="hidden lg:flex lg:w-1/2 h-full bg-gradient-to-br 
                    from-indigo-900/95 via-purple-900/80 to-rose-900/90 p-12 flex flex-col 
                    justify-center items-center relative overflow-hidden">
                    
                    

                    <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-4">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 
                            backdrop-blur-sm rounded-2xl border border-white/20">
                            <h1 className="text-4xl xl:text-5xl font-black bg-gradient-to-r 
                                from-indigo-300 via-purple-300 to-rose-300 bg-clip-text 
                                text-transparent drop-shadow-2xl">
                                Welcome Back
                            </h1>
                        </div>
                        <p className="text-slate-300 text-xl leading-relaxed">
                            Create your account and join thousands of satisfied users
                        </p>
                        <button onClick={() => navigate("/login")}
                            className="group relative bg-gradient-to-r from-amber-400 to-yellow-400 
                                text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl 
                                hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 
                                border border-amber-300/50 backdrop-blur-sm w-fit max-w-sm mx-auto
                                after:absolute after:inset-0 after:bg-gradient-to-r after:from-amber-500 
                                after:to-yellow-500 after:rounded-2xl after:blur after:opacity-0 
                                after:group-hover:opacity-20 after:transition-all after:duration-500">
                            <span className="relative flex items-center justify-center gap-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Sign In Now
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Side - Form (Full on mobile, 1/2 on desktop) */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center 
                    bg-slate-900/80 backdrop-blur-xl border-t lg:border-t-0 lg:border-l 
                    border-white/10">
                    
                    {/* Mobile Welcome Header */}
                    <div className="lg:hidden text-center mb-10 pb-8 border-b border-white/10">
                        <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r 
                            from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent 
                            mb-4">
                            Create Account
                        </h1>
                        <p className="text-slate-400 text-lg">Get started in seconds</p>
                    </div>

                    <div className="space-y-1 mb-8">
                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Secure Registration
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
                        {/* Name Field */}
                        <div>
                            <input
                                {...register("name")}
                                required
                                type="text"
                                placeholder="Full Name"
                                className="w-full h-14 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 
                                    backdrop-blur-sm text-white placeholder-slate-400 text-lg font-medium 
                                    border border-white/20 hover:border-white/30 focus:outline-none 
                                    focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500/50 
                                    transition-all duration-300 shadow-xl"
                            />
                        </div>

                        {/* Username Field */}
                        <div>
                            <input
                                {...register("username")}
                                required
                                type="text"
                                placeholder="@Username"
                                className="w-full h-14 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 
                                    backdrop-blur-sm text-white placeholder-slate-400 text-lg font-medium 
                                    border border-white/20 hover:border-white/30 focus:outline-none 
                                    focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500/50 
                                    transition-all duration-300 shadow-xl"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <input
                                {...register("password")}
                                required
                                type="password"
                                placeholder="Password"
                                className="w-full h-14 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 
                                    backdrop-blur-sm text-white placeholder-slate-400 text-lg font-medium 
                                    border border-white/20 hover:border-white/30 focus:outline-none 
                                    focus:ring-4 focus:ring-rose-500/30 focus:border-rose-500/50 
                                    transition-all duration-300 shadow-xl"
                            />
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="group relative w-full h-14 bg-gradient-to-r 
                                from-indigo-600 via-purple-600 to-rose-600 
                                hover:from-indigo-500 hover:via-purple-500 hover:to-rose-500 
                                text-white font-bold text-xl rounded-3xl shadow-2xl 
                                hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 
                                border-0 backdrop-blur-sm overflow-hidden
                                after:absolute after:inset-0 after:bg-gradient-to-r 
                                after:from-indigo-400 after:to-rose-400 after:rounded-3xl 
                                after:blur after:opacity-0 after:group-hover:opacity-30 
                                after:transition-all after:duration-500">
                            <span className="relative flex items-center justify-center gap-3 h-full">
                                <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Create Account
                            </span>
                        </button>
                    </form>

                    {/* Mobile Login Link */}
                    <div className="lg:hidden pt-8 mt-8 border-t border-white/10 text-center">
                        <p className="text-slate-400 text-sm mb-4">Already have an account?</p>
                        <button onClick={() => navigate("/login")}
                            className="w-full py-3 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm 
                                text-white font-semibold rounded-2xl border border-white/20 
                                hover:border-white/30 transition-all duration-300">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;
