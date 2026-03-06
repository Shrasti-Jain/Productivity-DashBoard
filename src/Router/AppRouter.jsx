import React from 'react'
import {createHashRouter, RouterProvider} from 'react-router'
import Home from '../Pages/Home'
import ToDoPlanner from '../Pages/ToDoPlanner'
import Planner from '../Pages/Planner'
import Motivation from '../Pages/Motivation'
import Pomodoro from '../Pages/Pomodoro'
import Goals from '../Pages/Goals'
import AllTask from '../Components/AllTask'
import CompletedTasks from '../Components/CompletedTasks'
import PendingTasks from '../Components/PendingTasks'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import { ToastContainer } from 'react-toastify'
import AuthCheck from '../Pages/AuthCheck'
import MainCheck from '../Pages/MainCheck'
import "react-toastify/dist/ReactToastify.css";
const AppRouter = () => {
    let router=createHashRouter([
       {
           path:"/",
           element:<AuthCheck/>,
           children:[
             {
            index:true,
            element:<Register/>
        },
        {
            path:"login",
            element:<Login/>
        }
           ]
       },
        {
            path:"/home",
            element:<MainCheck/>,
            children:[
                {
            index:true,
            element:<Home/>
            },
            {
            path:"todolist",
            element:<ToDoPlanner/>
           },
        {
            path:"planner",
            element:<Planner/>
        },
        {
            path:"motivation",
            element:<Motivation/>
        },
        {
            path:"pomodoro",
            element:<Pomodoro/>
        },
        {
            path:"goals",
            element:<Goals/>,
            children:[
                {
                    index:true,
                    element:<AllTask/>
                },
                {
                    path:"completedtasks",
                    element:<CompletedTasks/>
                },
                {
                    path:"pendingtasks",
                    element:<PendingTasks/>
                }
            ]
        }
            ]
        }
    ])
  return <>
  <ToastContainer
  position="top-right"
  autoClose={3000}
  style={{ zIndex: 9999 }}
/>
  <RouterProvider router={router}/>
  </>
}

export default AppRouter
