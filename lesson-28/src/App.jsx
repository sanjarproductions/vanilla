import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [text, setText] = useState([])

  // function submit(e){
  //   e.preventDefault()
  //   console.log(text)
  // }

  // ________
  // useEffect(() => {
  //   let isFetched = true;
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(data => setText(data))

  //   return () => {
  //     isFetched = false // clean up function
  //   }
  // }, [])
  // console.log(text)

  // _________
  const btn = useRef(null);

  useEffect(() => {
    btn.current.style.background = "red"
  }, [])
  
  return (
    <>
      {/* <form onSubmit={submit}>
        <input type="text" placeholder='Enter' onChange={(e) => setText(e.target.value)}/>
        <button >Click</button>
      </form> */}
      <button ref={btn} className='button'>Click</button>
    </>
  )
}

export default App


// conditional rendering => is normal rendering but with if statement
// useEffect(){}
// axios
// useRef => aka query selector for react js, dont use .querySelector()