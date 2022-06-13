import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Icons
import { GiHamburgerMenu } from 'react-icons/gi';

export function AppHeader() {
    const [isMenuOpen, setMenuState] = useState(false)

    const toggleMenu = () => {
        setMenuState(!isMenuOpen)
    }

    return (
        <header className="app-header">

            <div className={`screen-overlay ${(isMenuOpen) ? 'open' : ''}`} onClick={() => {
                toggleMenu()
            }}></div>

            <div className="header-content main-layout">
                <NavLink className='logo' to={'/'}>Logo</NavLink>
                <nav className="nav-container">
                    <ul className={`nav-links clean-list ${(isMenuOpen) ? 'open' : ''}`}>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/'}> <li>Home</li></NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/login'}> <li>Other</li></NavLink>
                    </ul>
                </nav>
                <button className="hamburger-btn" onClick={() => {
                    toggleMenu()
                }}>
                    <GiHamburgerMenu className="hamburger-icon" />
                </button>
            </div>
        </header>
    )
}