import React, {useState} from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function CustomHookOneDoc() {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <h1>Count - {count}</h1>
    </div>
  )
}

export default CustomHookOneDoc
