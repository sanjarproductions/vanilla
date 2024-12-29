import './App.css'
// import Sidebar from './Sidebar'
import { setNumberId } from './hooks/setNumberId'

function App() {
  const data = setNumberId(1000)
  console.log(data)

  return (
    <>
      {/* <Sidebar/> */}
    </>
  )
}

export default App


// custom hooks
// useImperativeHandle => for optimization (so that the parent element doesnt re renders)
// share ref
//material ui