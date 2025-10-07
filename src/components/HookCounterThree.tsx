import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState<{firstName: string, lastName: string}>({ firstName: '', lastName: '' })
  return (
    <div>
      <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
      <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
      <h2>
        Your name is {name.firstName} {name.lastName}
      </h2>
    </div>
  )
}

export default HookCounterThree
