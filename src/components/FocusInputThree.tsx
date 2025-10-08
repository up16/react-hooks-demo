import React, { useEffect, useRef } from 'react'

function FocusInputThree() {
    const [count, setCount] = React.useState(0);
    const intRef = useRef<NodeJS.Timeout | null>(null);
    
    useEffect(() => {
        intRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);  // ✅ Functional update
            console.log('Interval running');
        }, 1000);

        return () => {
            // clearInterval(intRef.current!);
            console.log('Interval cleared');
        };
    }, []);
  return (
    <div>
      <h3>Focus Input Three</h3>
      <p>Count: {count}</p>
      <button onClick={() => clearInterval(intRef.current!)}>Clear Interval</button>
    </div>
  )
}

export default FocusInputThree
