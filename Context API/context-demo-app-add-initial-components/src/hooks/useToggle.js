import React, { useState } from 'react'

export default function useToggle(initVal) {

    const [val, setVal] = useState(initVal);

    const toggle = () => {
        setVal(!val)
    }

    return [val, toggle];
}
