import React, {useContext} from 'react'
import { CounterContext } from '../App'

function ComponentA() {
  const context = useContext(CounterContext)
  const {dispatch} = context

  return (
    <div>
      <div>Component A</div>
      {/* <div>Count A: {count}</div> */}
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
