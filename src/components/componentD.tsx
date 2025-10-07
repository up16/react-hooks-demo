import React, {useContext} from 'react'
import { CounterContext } from '../App'

function ComponentD() {
    const {dispatch} = useContext(CounterContext)
  return (
    <div>
      <div>Component D</div>
      {/* <div>Count D: {count}</div> */}
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentD
