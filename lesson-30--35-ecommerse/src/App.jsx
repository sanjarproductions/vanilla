import Home from "./routes/home/Home"
import About from "./routes/about/About"
import {Routes, Route} from "react-router-dom"
import Contact from "./routes/contact/Contact"
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
