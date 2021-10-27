import { useState } from "react";

function useInputState(initialValue) {
    const [input, SetInput] = useState(initialValue);
    const handleChange = (e) => {
        SetInput(e.target.value);
    };
    const reset = () => {
        SetInput('');
    };
    return [input, handleChange, reset];
}

export default useInputState;