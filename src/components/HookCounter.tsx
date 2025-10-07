import React, {useState} from 'react'

function HookCounter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default HookCounter
