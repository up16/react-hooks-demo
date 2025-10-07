import React, { useState, useEffect } from 'react'

function HookCounterSeven() {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        console.log('Mouse event')
      setX(e.clientX)
      setY(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, []) // Empty array ensures this runs only on mount and unmount

  return (
    <div>
      <h1>X - {x}, Y - {y}</h1>
    </div>
  )
}

export default HookCounterSeven
