import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0) // topic 1
  // const [msg, setMsg] = useState();
  const [name, setName] = useState("Sanjar")

  // function addOne() {
  //   setCount(count + 1)
  // }

  // let num = 0;
  // function vanilla() {
  //   num += 1
  //   console.log(num)
  // }
  // if I'm gonna write console.log() her it's not gonna show the change 

  // function takeValue(val) {
  //   // console.log(smt)
  //   setMsg(val)
  // }

  function changeName() {
    if (name == "Sanjar") {
      setName("Mike")
    }
    else {
      setName("Sanjar")
    }
  }
  return (
    <>
      <div className="wrapper" style={{ background: name == "Sanjar" ? "red" : "green" }}> {/*conditional styling*/}
        <h2>{name}</h2>
        <button onClick={changeName}>Click</button>
      </div>
      
      {/* <p>{count}</p> */}
      {/* <button onClick={addOne}>React JS</button> */}

      {/* <button onClick={vanilla}>Vanilla</button> */}

      {/* <h2>{msg?.split(" ").length}</h2>
      <textarea name="" id="" onChange={(e) => takeValue(e.target.value)} ></textarea> */}

    </>
  )
}

export default App
