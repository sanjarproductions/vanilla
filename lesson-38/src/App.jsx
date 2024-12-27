import './App.css'
import Nav from './Nav'
import { useSelector } from 'react-redux'

function App() {
  const countInfo = useSelector(state => state.count)
  console.log(countInfo)

  return (
    <>
      <Nav />
      <h1>{countInfo}</h1>
    </>
  )
}

export default App
