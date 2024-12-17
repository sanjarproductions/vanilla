import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Register from "./routes/Register"
import Account from "./routes/Account"
import Cart from './routes/Cart'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <Link to={"/"}>Home</Link>
    <Link to={"/"}>Register</Link>
    <Link to={"/account"}>Account</Link>
    <Link to={"/cart"}>Cart</Link>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/register"} element={<Register  />} />
        <Route path={"/account"} element={<Account />} />
      </Routes>
    </>
  )
}

export default App
