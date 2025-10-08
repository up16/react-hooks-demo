import React from 'react'

function Button({ handleClick, children }: { handleClick: () => void, children: React.ReactNode }) {
    console.log(`Button component re-rendered by ${children}`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Button)
