import React, { useEffect } from 'react'

// Separate component that gets unmounted/mounted
function IntervalComponent() {
  function handleClick() {
    console.log('Button clicked - Focus Input Two');
  }
  
  useEffect(() => {
    console.log('IntervalComponent mounted - starting interval');
    const interval = setInterval(handleClick, 2000);
    
    return () => {
      console.log('IntervalComponent unmounting - clearing interval');
      clearInterval(interval);
    };
  }, []);
  
  return <button onClick={handleClick}>Focus Input (with interval)</button>;
}

function FocusInputTwo() {
  const [display, setDisplay] = React.useState(true);
  
  return (
    <div>
      <h3>Interval Cleanup Demo</h3>
      <button onClick={() => setDisplay(!display)}>
        Toggle display: {display ? 'ON' : 'OFF'}
      </button>
      
      {/* Now the entire component with the interval gets unmounted */}
      {display && <IntervalComponent />}
      
      <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <strong>🔍 Check Console:</strong>
        <ul>
          <li>When toggled ON: "IntervalComponent mounted" + interval starts</li>
          <li>When toggled OFF: "IntervalComponent unmounting" + interval clears</li>
          <li>Interval should NOT run when component is hidden!</li>
        </ul>
      </div>
    </div>
  )
}

export default FocusInputTwo
