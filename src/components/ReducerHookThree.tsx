import React from 'react'

function ReducerHookThree() {
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
    const [countTwo, dispatchTwo] = React.useReducer(reducer, initialState)
  return (
    <div>
        {count}
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      {countTwo}
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
      <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
      <button onClick={() => dispatchTwo('reset')}>Reset</button>
    </div>
  )
}

export default ReducerHookThree
