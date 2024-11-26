import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0) // topic 1

  function addOne() {
    setCount(count + 1)
  }

  // let num = 0;
  // function vanilla() {
  //   num += 1
  //   console.log(num)
  // }
  // if I'm gonna write console.log() her it's not gonna show the change 

  return (
    <>
      <p>{count}</p>
      <button onClick={addOne}>React JS</button>
      {/* <button onClick={vanilla}>Vanilla</button> */}
    </>
  )
}

export default App
