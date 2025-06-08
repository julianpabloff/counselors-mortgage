import { NavLink } from 'react-router';

import logo from '../../assets/logo.png';
import phone from '../../assets/phone.png';

import '../../styles.css';
import './Header.css';

function Header() {
    return (
        <div>
            <header className="max-w-container">
                <div className="max-w align-center justify-between">
                    <div className="flex h-100">
                        <NavLink to="/counselors-mortgage">
                            <div className="logo">
                                <img src={logo} alt="Logo"/>
                                <h1>Counselors Mortgage</h1>
                            </div>
                        </NavLink>
                        <nav className="h-100">
                            <NavLink to="/counselors-mortgage/about">Our Company</NavLink>
                            <NavLink to="/counselors-mortgage/mobile-app">Mobile App</NavLink>
                            <NavLink to="/counselors-mortgage/reviews">Reviews</NavLink>
                        </nav>
                    </div>
                    <a href="tel:+15129169955" className="phone-link">
                        (512) 916-9955
                        <img src={phone} alt="Phone"/>
                    </a>
                </div>
            </header>
            <div className="dummy-header"></div>
        </div>
    );
}

export default Header;
