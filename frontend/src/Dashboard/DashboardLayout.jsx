import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const DashboardLayout = () => {
  console.log('DashboardLayout rendered');
  return (
    <div className=' flex gap-4 flex-col md:flex-row '>
         <SideBar/>
         <Outlet/>
    </div>
  )
}

export default DashboardLayout
