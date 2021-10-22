import react, { useState } from 'react';

// We have to import useState hook from react to use states in the functional component
// useState() takes a paramenter which is the initial value
//useState returns an array containing two members 1st one is the value of the state being referenced and 
// second one is the method to update the state value

function CounterHooks() {
    const [count, SetCount] = useState(0);
    return (<div className="CounterClass">
        <h2>Counter Hooks</h2>
        <h3>Count is {count}</h3>
        <button onClick={() => { SetCount(count + 1) }}>Increment</button>
    </div>)
}

export default CounterHooks;