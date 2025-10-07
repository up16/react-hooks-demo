import React, {useReducer} from 'react';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterFive from './components/HookCounterFive';
// import HookCounterSix from './components/HookCounterSix';
// import HookCounterSeven from './components/HookCounterSeven';
// import MouseContainer from './components/MouseContainer';
// import IntervalHookCounter from './components/IntervalHookCounter';
import ComponentC from './components/ComponentC';
import ComponentB from './components/ComponentB';
import ComponentA from './components/ComponentA';
import ReducerDataFetching from './components/ReducerDataFetching';
// import ReducerHookTwo from './components/ReducerHookTwo';
// import ReducerHookThree from './components/ReducerHookThree';
// import ReducerHookOne from './components/ReducerHookOne';
// import DataFetching from './components/DataFetching';

export const UserContext = React.createContext<string | null>(null)
export const ChannelContext = React.createContext<string | null>(null)

export const CounterContext = React.createContext<{count: number, dispatch: React.Dispatch<'increment' | 'decrement' | 'reset'>}>({count: 0, dispatch: () => {}})

const reducer = (currState: number, action: 'increment' | 'decrement' | 'reset') => {
  switch(action) {
    case 'increment':
      return currState + 1
    case 'decrement':
      return currState - 1
    case 'reset':
      return 0
    default:
      return currState
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      {/* <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <HookCounterFive /> */}
      {/* <HookCounterSix /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      <UserContext.Provider value={"Rohit"}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterContext.Provider value={{count, dispatch}}>
        {count}
        <ComponentB />
        <ComponentA />
      </CounterContext.Provider>
      <ReducerDataFetching />
      {/* <ReducerHookOne /> */}
      {/* <ReducerHookTwo /> */}
      {/* <ReducerHookThree /> */}
    </div>
  );
}

export default App;
