import React from 'react'

function ReducerHookOne() {
    const initialState = 0
    const reducer = (currState: number, action: 'increment' | 'decrement' | 'reset') => {
        switch(action) {
            case 'increment':
                return currState + 1
            case 'decrement':
                return currState - 1
            case 'reset':
                return initialState
            default:
                return currState
        }
    }
    const [count, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div>
        {count}
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerHookOne
