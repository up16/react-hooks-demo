## React Hooks
[1] Why Hooks?
- "this" is hard to master
- Hot reloading is difficult as classes do not minify
- No way to share reuse statuful component logic
- Complex components become hard to Understand

[2] Unsafe useState
- use prevState otherwise you may encounter stale value  (see HookCounterTwo.tsx)

[3] React.StrictMode
- Re-renders twice in dev mode
- Checks for bad side effects

[4] useEffect Hook Dependency Array
- Only include props and states that are being read in the useEffect scope
- states, props that are not being read could be write only need not be included it will lead to infinite loop
- If define function inside useEffect -> See if props being used in the function as it may be added to the dependency array

[5] useEffect Dependency Array - When to Use What:

## Empty Array [] - Run Once (componentDidMount)
```jsx
useEffect(() => {
  // Runs only once after first render
  console.log('Component mounted');
  fetchInitialData();
}, []); // Empty array = run once
```
**Use when:**
- Setting up subscriptions
- Fetching initial data
- One-time setup (timers, event listeners)
- Document title on mount

## No Array - Run Every Render (componentDidUpdate + componentDidMount)
```jsx
useEffect(() => {
  // Runs after EVERY render
  console.log('Component rendered');
}); // No array = runs every time
```
**Use when:**
- Debugging (rarely in production)
- Side effects that should happen every render
- **Usually avoid this** - can cause performance issues

## Specific Dependencies [dep1, dep2] - Run When Dependencies Change
```jsx
useEffect(() => {
  // Runs when count or name changes
  document.title = `${name}: ${count}`;
}, [count, name]); // Runs when count OR name changes
```
**Use when:**
- Effect depends on specific props/state
- Want to sync with certain values
- Most common pattern

## Examples:

### 1. Timer/Interval (Empty Array)
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);
  
  return () => clearInterval(timer); // Cleanup
}, []); // Run once, cleanup on unmount
```

### 2. Data Fetching (With Dependencies)
```jsx
useEffect(() => {
  fetchUser(userId).then(setUser);
}, [userId]); // Refetch when userId changes
```

### 3. Subscribing to External Data (Empty Array)
```jsx
useEffect(() => {
  const subscription = subscribeToSomething();
  return () => subscription.unsubscribe();
}, []); // Subscribe once, unsubscribe on unmount
```

### 4. Updating Document Title (With Dependencies)
```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // Update title when count changes
```

### 5. Form Validation (With Dependencies)
```jsx
useEffect(() => {
  setIsValid(email.includes('@') && password.length > 6);
}, [email, password]); // Validate when email or password changes
```

## Quick Decision Guide:
- **Need it once?** → `[]`
- **Need it when something specific changes?** → `[dependency1, dependency2]`
- **Need it every render?** → No array (rarely used)
- **Reading variables inside effect?** → Include them in array

[6] useContext Hook
Passing props from App.tsx -> CompA -> CompB (Directly from App.tsx to CompB without passing it to CompA)
```jsx
// App.tsx
export const UserContext = React.useContext(defaultValue)
<UserContext.Provider value={userValue}>
    <ComponentA>
</UserContext.Provider>
// ComponentA.tsx
<ComponentB />
// ComponentB.tsx
import React, {useContext} from "react"
import {UserContext} from "./App.tsx"
const user = useContext(UserContext)
return <div>{user}</div>
```

[7] useReducer
- Alternative to useState
- useState built using useReducer (useReducer more primitive)
- useReducer(reducer fn, initialState)
- newState = reducer(currentState, action)
- useReducer returns [newState, dispatch]

[8] Global State management
- useReducer + UseContext (share state between 2 components)

[9] Local state management
- useReducer only

[8] useReducer vs useState
- number, string, boolean -> useState | object, array -> useReducer
- No of state transiions: one or two -> useState | many -> useReducer
- business login: No useState | Yes useReducer
- State: Local -> useState | Global -> useReducer

[9] useCallback Hook
- Needed to furtur optimize memoized components with callback functions passed to the child component (React.memo(ChildComponent))

[10] React Component Re-rendering Behavior
**KEY CONCEPT: When ANY state changes in a component, the ENTIRE component re-renders**

### The Re-rendering Rule:
```jsx
function MyComponent() {
  const [count, setCount] = useState(0);      // State 1
  const [name, setName] = useState('');       // State 2
  
  console.log('🔄 ENTIRE COMPONENT RE-RENDERS!');
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Button 1</button>  {/* Click this... */}
      <button onClick={() => setName('new')}>Button 2</button>       {/* ...both buttons re-render */}
    </div>
  );
}
```

### What Happens:
1. **Click Button 1** (`setCount`) → **Entire component re-renders**
2. **Click Button 2** (`setName`) → **Entire component re-renders**  
3. **Both buttons get recalculated** → **Both re-render even if only one changed**

### Why React Does This:
- React's Philosophy: When state changes, the component needs to re-render to reflect new state
- The entire function runs: Your component is just a function - when called, everything inside executes
- React doesn't know which parts depend on which state until it runs the function

### Optimization Strategies:

#### 1. Split into Separate Components:
```jsx
function Button1() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}

function Button2() {
  const [name, setName] = useState('');
  return <button onClick={() => setName('new')}>Name: {name}</button>;
}

// Now each button only re-renders when its own state changes
```

#### 2. Use React.memo for Child Components:
```jsx
const ExpensiveButton = React.memo(({ onClick, children }) => {
  console.log('ExpensiveButton rendered');
  return <button onClick={onClick}>{children}</button>;
});
```

#### 3. Use useMemo/useCallback for Expensive Operations:
```jsx
const expensiveValue = useMemo(() => {
  // Expensive calculation only runs when 'count' changes
  return doExpensiveCalculation(count);
}, [count]); // Only recalculates if count changes

const handleClick = useCallback(() => {
  // Function only recreated when dependencies change
  doSomething(count);
}, [count]);
```

### Testing Re-renders:
Add `console.log('Component rendered')` to see when components re-render.
Every state change = full component re-render!