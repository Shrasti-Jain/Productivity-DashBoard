import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router'

const MainCheck = () => {
    let {singleUser}=useSelector((state)=>state.singleUser)
    let {pathname}=useLocation()
    if(!singleUser){
        if(pathname=='/')
        return <Navigate to="/"/>
        return <Navigate to="/login"/>
    }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default MainCheck
