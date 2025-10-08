import React from 'react'

function Count({text, count}: {text: string, count: number}) {
    console.log("Rendering: ", text);
  return (
    <div>
      <h2>{text}</h2>
      <p>{count}</p>
    </div>
  )
}

export default React.memo(Count)
