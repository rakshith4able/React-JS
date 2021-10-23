import React, { useState } from "react";

export default val => {
    const [value, setValue] = useState(val);
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const reset = () => {
        setValue('');
    }

    return [value, handleChange, reset];

}