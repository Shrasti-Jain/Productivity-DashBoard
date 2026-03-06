import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const AuthCheck = () => {
    let {singleUser}=useSelector((state)=>state.singleUser)
    if(singleUser){
        return <Navigate to="/home"/>
    }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthCheck
