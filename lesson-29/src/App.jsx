// import { useState, useEffect } from 'react'
import './App.css'
// import instance from './api/axios'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import Home from './pages/Home'
import { NavLink } from 'react-router-dom'

import Auth from './pages/Auth'
import Login from './routes/Login'
import Signup from './routes/Signup'

function App() {

  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //   // instance("/users")
  //   //     .then(response => console.log(response.data)) 
  //   async function load() {
  //     try {
  //       let smt = await instance("/users")
  //       // .then(response => console.log(response.data))
  //       setUsers(smt.data)
  //     }
  //     catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   load()

  //   //deps / dependencies
  // }, [])

  // console.log(users)
  return (
    <>
      <nav style={{background:"red"}}>
        <NavLink className={({ isActive }) => isActive ? "active" : "link"} to="/">Home</NavLink> <br />
        <NavLink className={({ isActive }) => isActive ? "active" : "link"} to="/about">About</NavLink> <br />
        <NavLink className={({ isActive }) => isActive ? "active" : "link"} to="/auth">Auth</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/auth' element={<Auth />}>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/signup' element={<Signup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

//react router dom
//axios
//dependencies array = []