import React, {useEffect, useState} from 'react'

function HookCounterFive() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `Count: ${count}`
    }, [count]) // only run when count changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default HookCounterFive
