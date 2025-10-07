import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState<string[]>([])
    const [value, setValue] = useState<string>("")
    const addItems = (item: string) => {
        setItems([...items, item])
        setValue("")
    }
  return (
    <div>
      {items.map((item, index) => <h2 key={index}>{item}</h2>)}
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => addItems(value)}>Add Item</button>
    </div>
  )
}

export default HookCounterFour
