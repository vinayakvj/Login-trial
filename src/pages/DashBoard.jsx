import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

function DashBoard() {
  return (
    <div>
        <SideBar/>
        <Outlet />
    </div>
  )
}

export default DashBoard