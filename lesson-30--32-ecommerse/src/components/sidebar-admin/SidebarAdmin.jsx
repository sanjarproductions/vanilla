import React from 'react'
import "./SidebarAdmin.css"
import { Link } from 'react-router-dom'

const SidebarAdmin = () => {
  return (
    <div className='sidebar'>
      <Link to={"/admin/order/all"}>All</Link>
      <Link to={"/admin/order/contacted"}>Contacted</Link>
      <Link to={"/admin/order/not-contacted"}>Not Contacted</Link>
      
      <Link to={"/admin/order/all"}>All</Link>
      <Link to={"/admin/order/contacted"}>Contacted</Link>
      <Link to={"/admin/order/not-contacted"}>Not Contacted</Link>
    </div>
  )
}

export default SidebarAdmin
