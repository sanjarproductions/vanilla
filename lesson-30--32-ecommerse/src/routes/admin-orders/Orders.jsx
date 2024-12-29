import React from 'react'
import "./Orders.css"
import { Link, Outlet } from 'react-router-dom'

const Orders = () => {
  
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/admin/orders/all"}>All</Link>
          </li>
          <li>
            <Link to={"/admin/orders/contacted"}>Contacted</Link>
          </li>
          <li>
            <Link to={"/admin/orders/not-contacted"}>Not Contacted</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Orders
