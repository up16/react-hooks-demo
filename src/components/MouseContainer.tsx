import React from 'react'
import HookCounterSeven from './HookCounterSeven'

function MouseContainer() {
    const [display, setDisplay] = React.useState(true)
  return (
    <div>
      <h1>Mouse Position</h1>
      {display && <HookCounterSeven />}
      <button onClick={() => setDisplay(!display)}>
        Toggle Mouse Position
      </button>
    </div>
  )
}

export default MouseContainer
