import React from 'react'
import "./AdminOrdersDetails.css"
import { useEffect, useState } from 'react'
import instance from "../../api/axios"
import { useParams } from 'react-router-dom'

const AdminOrdersDetails = () => {
    let { status } = useParams()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        instance("order/all-orders", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("admin-auth-token")
            }
        })
            .then(response => setOrders(response.data.allOrders))
            .catch(err => console.log(err))
    }, [])
    let contactedFilter = orders?.filter(item => item.contacted === true)
    let notContactedFilter = orders?.filter(item => item.contacted === false)
    console.log(contactedFilter, notContactedFilter)
    return (
        <div>
            {
                status === "contacted" ? (
                    <>
                        {contactedFilter.map(orderItem => (
                            <p key={orderItem.id}>{orderItem.fullname}</p>
                        ))}
                    </>
                ) : status === "all" ? (
                    <>
                        {orders.map(orderItem => (
                            <p key={orderItem.id}>{orderItem.fullname}</p>
                        ))}
                    </>
                ) : (
                    <>
                        {notContactedFilter.map(orderItem => (
                            <p key={orderItem.id}>{orderItem.fullname}</p>
                        ))}
                    </>
                )
            }

        </div>
    )
}

export default AdminOrdersDetails
