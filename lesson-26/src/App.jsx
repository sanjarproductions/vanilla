import './App.css'
import Nav from './components/nav/Nav'
// import Header from './components/nav/Nav'; if you export default 
function App() {


  return (
    <>
      {/* App.js is kind of like a biggest component here, because we connect all the other componenets to it, kind of like a body.append() in vanilla */}
      <Nav/>
      {/* <Header/> if you export default */}
    </>
  )
}

export default App
