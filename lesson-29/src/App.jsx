// import { useState, useEffect } from 'react'
import './App.css'
// import instance from './api/axios'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import Home from './pages/Home'

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
      <nav>
        <h1>Nav</h1>
      </nav>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App

//react router dom
//axios
//dependencies array = []