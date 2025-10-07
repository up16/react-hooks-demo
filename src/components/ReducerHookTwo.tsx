import React from 'react'

type ActionType = {
    type: 'increment' | 'decrement' | 'reset'
    value?: number
}

type StateType = {
    firstCounter: number
    secondCounter: number
}

function ReducerHookTwo() {
    const initialState: StateType = {
        firstCounter: 0,
        secondCounter: 10
    }
    const reducer = (currState: StateType, action: ActionType) => {
        switch(action.type) {
            case 'increment':
                return {...currState, firstCounter: currState.firstCounter + (action.value!), secondCounter: currState.secondCounter + (action.value!)}
            case 'decrement':
                return {...currState, firstCounter: currState.firstCounter - (action.value!), secondCounter: currState.secondCounter - (action.value!)}
            case 'reset':
                return initialState
            default:
                return currState
        }
    }
    const [count, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div>
        {count.firstCounter}<br/>
        {count.secondCounter}
      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
      <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
      <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerHookTwo
