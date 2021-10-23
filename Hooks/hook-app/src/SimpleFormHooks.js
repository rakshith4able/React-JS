import React, { useState } from 'react';
import useInputState from './hooks/useInputState';
function SimpleFormHooks() {

    const [email, updateEmail, resetEmail] = useInputState('');
    const [pass, updatePass, resetPass] = useInputState('');



    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Email={email} and Password={pass}</h2>
                <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={updateEmail}
                />
                <input
                    type='password'
                    name='password'
                    value={pass}
                    onChange={updatePass}
                />
                <button onClick={resetEmail}>REset Email</button>
                <button onClick={resetPass}>REset Pass</button>
            </form>
        </div>
    );
}

export default SimpleFormHooks;