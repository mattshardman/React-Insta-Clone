import React, { useState } from 'react';
import withAuth from '../auth/authenticate';

function Login({ login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form onSubmit={(e) => login(e, username, password)}>
            <input 
                type="text"
                value={username}
                onChange={setUsername}
                placeholder="Username"
            />
            <input 
                type="text"
                value={password}
                onChange={setPassword}
                placeholder="Password"
            />
            <button
                type="submit"
            >
                Next
            </button>
        </form>
    )
}

export default Login;