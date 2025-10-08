import React from 'react'

function Title() {
  console.log("Title rendered");
  return (
    <h1>
      Use Callback Hook
    </h1>
  )
}

export default React.memo(Title)
