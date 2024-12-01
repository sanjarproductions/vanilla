import Home from "./routes/home/Home"
import About from "./routes/about/About"
import {Routes, Route} from "react-router-dom"
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
