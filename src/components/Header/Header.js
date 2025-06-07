import { NavLink } from 'react-router';

import logo from '../../assets/logo.png';

import '../../styles.css';
import './Header.css';

function Header() {
    return (
        <header className="max-w-container">
            <div className="max-w">
                <NavLink to="/counselors-mortgage">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h1>Counselors Mortgage</h1>
                    </div>
                </NavLink>
                <nav>
                    <NavLink to="/counselors-mortgage/about">Our Company</NavLink>
                    <NavLink to="/counselors-mortgage/mobile-app">Mobile App</NavLink>
                    <NavLink to="/counselors-mortgage/reviews">Reviews</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
