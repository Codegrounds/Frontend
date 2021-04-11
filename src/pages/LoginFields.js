import React, { useRef, useState } from 'react';
import 'codegrounds/styles/App.css';

export function LoginFields() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('submitted', username, password)
    }

    return (
        <div className="LoginPage">

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Username:
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
}
