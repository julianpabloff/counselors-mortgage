import { NavLink } from 'react-router';

import logo from '../../assets/logo.png';

import '../../styles.css';
import './Header.css';

function Header() {
    return (
        <header class="max-w-container">
            <div class="max-w">
                <div class="logo">
                    <img src={logo} alt="Logo" />
                    <h1>Counselors Mortgage</h1>
                </div>
                <nav>
                    <NavLink to="/about">Our Company</NavLink>
                    <NavLink to="/mobile-app">Mobile App</NavLink>
                    <NavLink to="/reviews">Reviews</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
