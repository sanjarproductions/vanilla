import './App.css'
// import { useLayoutEffect } from 'react'
import Child from './components/child/Child'
import { useState, useMemo, useCallback } from 'react';

function App() {
  let word = "hello";
  const [num, setNum] = useState(0)
 
  return (
    <>
      <div>
        <button onClick={() => setNum(num + 1)}>+</button>
        <h1>{num}</h1>
        <button onClick={() => setNum(num - 1)}>-</button>
      </div>
      <Child word={word}/>
    </>
  )
}

export default App


// useId => creates an id but not a uniqe one, for that use uuid()
// useEffect() vs useLayoutEffect()
// react memo => for optimization
// useCallback
// useMemo


// In computing, memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It is the process of modifying a software system to make some aspect of it work more efficiently or use fewer resources.