// import React from 'react'
import { useState } from "react"
import { useDispatch } from "react-redux"

const Register = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    avatar: "",
    password: ""
  })

  function registerUser(e) {
    e.preventDefault()
    fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if(data.id){
          dispatch({data, type: "REGISTER_USER"})
          // console.log("hi")
        }
      })
    console.log(newUser)
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input type="text" required placeholder="Your Name" onChange={e => setNewUser({ ...newUser, name: e.target.value })} />
        <input type="email" required placeholder="Your Email" onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
        <input type="url" required placeholder="Your Avatar URL" onChange={e => setNewUser({ ...newUser, avatar: e.target.value })} />
        <input type="password" required placeholder="Your Password" onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
        <button>Click</button>
      </form>
    </div>
  )
}

export default Register
