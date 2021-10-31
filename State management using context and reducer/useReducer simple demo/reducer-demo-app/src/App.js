import './App.css';
import React, { useReducer } from 'react';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.value };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
  }
}
function App() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => { dispatch({ type: 'increment', value: 5 }) }}>Add</button>
      <button onClick={() => { dispatch({ type: 'decrement' }) }}>Subtract</button>
      <button onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
    </div>
  );
}

export default App;
