import React, {useEffect, useState} from 'react'

function HookCounterSix() {
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>('')

  useEffect(() => {
    console.log('useEffect - updating document title')
    document.title = `Count: ${count}, Name: ${name}`
  }, [count, name]) // only run when count or name changes

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default HookCounterSix
