import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function AppHeader() {
    return (
        <header className="app-header">
            <div className="header-content">
                <NavLink className='logo' to={'/'}>Logo</NavLink>
                <nav className="header-nav">
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/'}>Home</NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/login'}>Login</NavLink>
                </nav>
            </div>
        </header>
    )
}