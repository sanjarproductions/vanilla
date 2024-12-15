import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from './routes/Login'
import Home from './routes/Home'

import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
