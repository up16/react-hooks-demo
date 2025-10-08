import {useState} from 'react'

function useCounter(initialValue = 0, incrementValue = 1) {
  const [count, setCount] = useState(initialValue)
  function increment () {
    setCount((prevCount) => (prevCount + incrementValue))
  }
  function decrement () {
    setCount((prevCount) => (prevCount - incrementValue))
  }
  function reset () {
    setCount(initialValue)
  }
  return {count, increment, decrement, reset}
}

export default useCounter
