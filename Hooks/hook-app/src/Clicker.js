import React, { useState, useEffect } from 'react';

function Clicker() {
    const [count, setCount] = useState(0);
    useEffect(() => document.title = count.toString());
    return <button onClick={() => { setCount(count + 1) }}>Click ME to increase Count</button>
}

export default Clicker;