import { NavLink } from 'react-router';

import logo from '../../assets/logo.png';
import phone from '../../assets/phone.png';

import '../../styles.css';
import './Header.css';

const scrollToTop = () => window.scrollTo(0, 0);

function ScrollResetLink({ to, children }) {
    return (
        <NavLink to={to} onClick={scrollToTop}>
            {children}
        </NavLink>
    );
}

function Header() {
    return (
        <>
            <header className="max-w-container">
                <div className="max-w align-center justify-between">
                    <div className="flex h-100">
                        <ScrollResetLink to="/">
                            <div className="logo">
                                <img src={logo} alt="Logo"/>
                                <span>Counselors Mortgage</span>
                            </div>
                        </ScrollResetLink>
                        <nav className="h-100">
                            <ScrollResetLink to="/about">Our Company</ScrollResetLink>
                            <ScrollResetLink to="/products">Loan Products</ScrollResetLink>
                            <ScrollResetLink to="/reviews">Reviews</ScrollResetLink>
                        </nav>
                    </div>
                    <a href="tel:+15129169955" className="phone-link">
                        (512) 916-9955
                        <img src={phone} alt="Phone"/>
                    </a>
                </div>
            </header>
            <div className="dummy-header"></div>
        </>
    );
}

export default Header;
