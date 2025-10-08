import React, { useState, useMemo, useCallback } from 'react';

// Child component props type
interface ChildProps {
  onClick: () => void;
  data: number;
  children: string;
}

// Child component that shows when it re-renders
const ChildComponent = React.memo<ChildProps>(({ onClick, data, children }) => {
  console.log(`🔄 ChildComponent rendered for: ${children}`);
  return (
    <div style={{ border: '1px solid blue', margin: '5px', padding: '10px' }}>
      <h4>{children}</h4>
      <p>Data: {data}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

function CallbackVsMemoDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');
  const [trigger, setTrigger] = useState(0); // Just to cause re-renders

  console.log('🔄 CallbackVsMemoDemo re-rendered');

  // ❌ WITHOUT useCallback - Function recreated every render
  const badHandleClick = () => {
    console.log('Bad function called');
  };

  // ✅ WITH useCallback - Function cached
  const goodHandleClick = useCallback(() => {
    console.log('Good function called with count:', count);
  }, [count]); // Only recreated when count changes

  // ❌ WITHOUT useMemo - Value recalculated every render
  const badExpensiveValue = (() => {
    console.log('💸 Expensive calculation running (bad)');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result + count;
  })();

  // ✅ WITH useMemo - Value cached
  const goodExpensiveValue = useMemo(() => {
    console.log('💰 Expensive calculation running (good)');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result + count;
  }, [count]); // Only recalculated when count changes

  // useMemo with different dependency
  const nameLength = useMemo(() => {
    console.log('📏 Calculating name length');
    return name.length;
  }, [name]); // Only recalculated when name changes

  return (
    <div style={{ padding: '20px' }}>
      <h2>useCallback vs useMemo Demo</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setCount(c => c + 1)}>
          Increment Count: {count}
        </button>
        <button onClick={() => setName(name === 'John' ? 'Jane' : 'John')}>
          Toggle Name: {name}
        </button>
        <button onClick={() => setTrigger(t => t + 1)}>
          Force Re-render: {trigger}
        </button>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {/* These will re-render unnecessarily because badHandleClick is recreated */}
        <ChildComponent onClick={badHandleClick} data={badExpensiveValue}>
          Bad Function (always re-renders)
        </ChildComponent>

        {/* This only re-renders when count changes because goodHandleClick is memoized */}
        <ChildComponent onClick={goodHandleClick} data={goodExpensiveValue}>
          Good Function (memoized)
        </ChildComponent>

        {/* This only re-renders when name changes */}
        <ChildComponent 
          onClick={() => console.log('Name clicked')} 
          data={nameLength}
        >
          Name Length (depends on name)
        </ChildComponent>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h3>Watch the console to see:</h3>
        <ul>
          <li><strong>💸 Bad expensive calculation</strong> - runs every render</li>
          <li><strong>💰 Good expensive calculation</strong> - only runs when count changes</li>
          <li><strong>🔄 Child components</strong> - which ones re-render unnecessarily</li>
        </ul>
      </div>
    </div>
  );
}

export default CallbackVsMemoDemo;