
import React, { useEffect, useState } from 'react';

export function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => { 
        
    }, [])

    const onSubmit = (ev) => {
        ev.preventDefault()
        console.log('submit')
        console.log('username:', username);
        console.log('password:', password);
    }

    const isDisabled = (username && password) ? false : true
    const btnClasses = `btn btn-submit ${isDisabled ? 'is-block' : ''}`
    
    return (
        <div className="login-page">
            <form className="form-modal" onSubmit={onSubmit}>
                <h1 className='nice-heading'>Login to App</h1>
                <input
                    autoFocus
                    required
                    type="txt"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}
                    placeholder="Enter username"
                />
                <input
                    required
                    type="txt"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    placeholder="Enter password"
                />
                <button className={btnClasses} disabled={isDisabled}>Login</button>
            </form>
        </div>
    )
}