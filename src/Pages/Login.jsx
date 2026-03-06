import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setSingleUser } from "../Features/SingleUserSlice";
import { addcompleteCount, addcount } from "../Features/DailyGoalSlice";

const Login = () => {
    let navigate = useNavigate()
    const { reset, handleSubmit, register } = useForm();
    let dispatch = useDispatch()
    let { allregister } = useSelector((state) => state.alluser)

    const handleFormSubmit = (data) => {
        let findelem = allregister.find((e) => e.username == data.username)
        if (!findelem) {
            toast.error("Invalid Username")
            return
        }
        if (findelem.password != data.password) {
            toast.error("Invalid Username and password!!!")
            return
        }
        toast.success("User logged in successfully!!!");
        dispatch(setSingleUser(findelem))
        dispatch(addcompleteCount(findelem.username))
        navigate("/home")
        reset();
    };

    return (
        <>
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 
            flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-12 xl:p-16 overflow-auto">
            
            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-10 w-60 h-60 bg-rose-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Main Container */}
            <div className="w-full max-w-md lg:max-w-4xl lg:h-[75vh] relative z-10 
                flex flex-col lg:flex-row bg-white/5 backdrop-blur-2xl rounded-3xl 
                shadow-2xl border border-white/10 overflow-hidden mb-8 lg:mb-0">

                {/* Left Side - Login Form */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center 
                    bg-slate-900/80 backdrop-blur-xl border-r lg:border-r-0 lg:border-t 
                    border-white/10">
                    
                    {/* Mobile Welcome Header */}
                    <div className="lg:hidden text-center mb-10 pb-8 border-b border-white/10">
                        <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r 
                            from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent 
                            mb-4">
                            Welcome Back
                        </h1>
                        <p className="text-slate-400 text-lg">Sign in to continue</p>
                    </div>

                    <div className="space-y-1 mb-8">
                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Secure Login
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
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

                        <div>
                            <input
                                {...register("password")}
                                required
                                type="password"
                                placeholder="Password"
                                className="w-full h-14 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 
                                    backdrop-blur-sm text-white placeholder-slate-400 text-lg font-medium 
                                    border border-white/20 hover:border-white/30 focus:outline-none 
                                    focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500/50 
                                    transition-all duration-300 shadow-xl"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full h-14 bg-gradient-to-r 
                                from-purple-600 via-indigo-600 to-purple-600 
                                hover:from-purple-500 hover:via-indigo-500 hover:to-purple-500 
                                text-white font-bold text-xl rounded-3xl shadow-2xl 
                                hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 
                                border-0 backdrop-blur-sm overflow-hidden
                                after:absolute after:inset-0 after:bg-gradient-to-r 
                                after:from-purple-400 after:to-indigo-400 after:rounded-3xl 
                                after:blur after:opacity-0 after:group-hover:opacity-30 
                                after:transition-all after:duration-500">
                            <span className="relative flex items-center justify-center gap-3 h-full">
                                <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
                                </svg>
                                Sign In
                            </span>
                        </button>
                    </form>

                    {/* Mobile Register Link */}
                    <div className="lg:hidden pt-8 mt-8 border-t border-white/10 text-center">
                        <p className="text-slate-400 text-sm mb-4">Don't have an account?</p>
                        <button onClick={() => navigate("/")}
                            className="w-full py-3 px-8 bg-gradient-to-r from-amber-400/90 to-yellow-400/90 
                                hover:from-amber-400 hover:to-yellow-400 text-slate-900 font-semibold 
                                rounded-2xl border border-amber-300/50 backdrop-blur-sm shadow-xl 
                                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                Create Account
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Side - Desktop Welcome + Create Account */}
                <div className="hidden lg:flex lg:w-1/2 h-full bg-gradient-to-br 
                    from-purple-900/95 via-indigo-900/80 to-purple-900/90 p-12 flex flex-col 
                    justify-center items-center relative overflow-hidden">


                    <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-4 w-full">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 
                            backdrop-blur-sm rounded-2xl border border-white/20">
                           
                            <h1 className="text-4xl xl:text-3xl font-black bg-gradient-to-r 
                                from-purple-300 via-indigo-300 to-purple-300 bg-clip-text 
                                text-transparent drop-shadow-2xl">
                                Hello Again
                            </h1>
                        </div>
                        
                        <p className="text-slate-300 text-xl leading-relaxed">
                            Welcome back! Log in with your credentials to access your dashboard
                        </p>
                        

                        {/* DESKTOP CREATE ACCOUNT BUTTON */}
                        <button onClick={() => navigate("/")}
                            className="group relative w-fit max-w-sm bg-gradient-to-r from-amber-400/95 to-yellow-400/95 
                                hover:from-amber-400 hover:to-yellow-400 text-slate-900 px-8 py-4 
                                rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-2 
                                transition-all duration-500 border border-amber-300/50 backdrop-blur-sm
                                after:absolute after:inset-0 after:bg-gradient-to-r after:from-amber-500 
                                after:to-yellow-500 after:rounded-2xl after:blur after:opacity-0 
                                after:group-hover:opacity-20 after:transition-all after:duration-500">
                            <span className="relative flex items-center justify-center gap-3">
                                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                Create New Account
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastClassName="bg-slate-900/95 border border-slate-700/50 backdrop-blur-xl shadow-2xl rounded-2xl font-semibold text-white"
        />
        </>
    );
};

export default Login;
