import React from 'react'
import "./Admin.css"
import SidebarAdmin from '../../components/sidebar-admin/sidebarAdmin'
import { Outlet } from 'react-router-dom'

const Admin = () => {

  //https://mold-components.onrender.com/order/all-orders

  return (
    <div>
      <Outlet/>
      <SidebarAdmin />
    </div>
  )
}

export default Admin
