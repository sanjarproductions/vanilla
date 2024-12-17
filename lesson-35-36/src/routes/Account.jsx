// import React from 'react'
import { useSelector } from "react-redux"
const Account = () => {
  const userData = useSelector(state => state.user)
  console.log(userData)
  return (
    <div>
      <i>Account</i>
      <br />
      <br />
      <br />
      <br />
      <h1>{userData?.name}</h1>
      <p>{userData?.role}</p>
      <img src={userData?.avatar} alt="" width={1000}/>
    </div>
  )
}

export default Account
