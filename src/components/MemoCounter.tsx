import React, {useMemo} from 'react'

function MemoCounter() {
  const [count, setCount] = React.useState(0);
  const [countTwo, setCountTwo] = React.useState(0);

  console.log('🔄 MemoCounter RE-RENDERED! count:', count, 'countTwo:', countTwo);

  const isEven = useMemo(() => {
    console.log('⚡ useMemo for isEven is calculating (expensive operation)');
    let i = 0;
    while (i < 200000000) i++;
    return count % 2 === 0;
  }, [count]);

  const isEvenTwo = useMemo(() => {
    console.log('⚡ useMemo for isEvenTwo is calculating');
    return countTwo % 2 === 0;
  }, [countTwo]);

  return (
    <div>
      <h2>Memoized Counter</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
        <span> → {isEven ? 'Even' : 'Odd'}</span>
      </div>
      <br />
      <div>
        <button onClick={() => setCountTwo(countTwo + 1)}>Increment CountTwo: {countTwo}</button>
        <span> → {isEvenTwo ? 'Even' : 'Odd'}</span>
      </div>
      <p><strong>Check console to see re-rendering behavior!</strong></p>
    </div>
  );
}

export default MemoCounter
