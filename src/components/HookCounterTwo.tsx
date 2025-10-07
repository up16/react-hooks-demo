import React, {useState} from 'react'

function HookCounterTwo() {
  const initialState = 0
  const [count, setCount] = useState<number>(initialState)
  const incrementByFive = () => {
    for(let i=0; i<5;i++){
      setCount((prevState) => prevState + 1) // wrong way, will always use the initial value of count
      // setCount((prevState) => prevState + 1) // correct way, will use the latest value of count
    }
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>Decrement</button>
      <button onClick={() => setCount(initialState)}>Reset</button>
      {/* <button onClick={() => setCount((prevState) => prevState + 5)}>Increment by 5</button> */}
      <button onClick={incrementByFive}>Increment by 5 (loop)</button>
    </div>
  )
}

export default HookCounterTwo
