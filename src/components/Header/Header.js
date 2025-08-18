import ScrollResetLink from '../../components/ScrollResetLink/ScrollResetLink.js';

import logo from '../../assets/logo.png';
import phone from '../../assets/phone.png';

import '../../styles.css';
import './Header.css';

function Header() {
    return (
        <>
            <header className="max-w-container">
                <div className="header-main max-w align-center justify-between">
                    <div className="flex h-100">
                        <ScrollResetLink to="/" className="home">
                            <img src={logo} alt="Logo"/>
                            <span>Counselors Mortgage</span>
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
                <div className="header-addon max-w-container justify-center">
                    <nav className="max-w">
                        <ScrollResetLink to="/about">Our Company</ScrollResetLink>
                        <ScrollResetLink to="/products">Loan Products</ScrollResetLink>
                        <ScrollResetLink to="/reviews">Reviews</ScrollResetLink>
                    </nav>
                </div>
            </header>
            <div className="dummy-header"></div>
        </>
    );
}

export default Header;
