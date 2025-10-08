import React from 'react'

type InputBindType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function useInput(initialValue: string = ''): [InputBindType, () => void, string] {
  const [value, setValue] = React.useState(initialValue)
  
  const reset = () => {
    setValue(initialValue)
  }

  const bind: InputBindType = {
    value: value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }
  }

  return [bind, reset, value]
}

export default useInput
