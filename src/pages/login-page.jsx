import React, { useEffect, useState } from 'react';

export function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (ev) => {
        ev.preventDefault()
        console.log('submit')
        console.log('username:', username);
        console.log('password:', password);
    }

    const isDisabled = (username && password) ? false : true
    const btnClasses = `primary-btn ${isDisabled ? 'is-block' : ''}`
    
    return (
        <div className="login-page">
            <form className="form-modal" onSubmit={onSubmit}>
                <h2 className='nice-heading'>Login to App</h2>
                <label >Username</label>
                <input
                    autoFocus
                    required
                    type="txt"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}
                    placeholder="Enter username"
                />
                <label >Password</label>
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