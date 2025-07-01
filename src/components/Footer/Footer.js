import ArrowLink from '../ArrowLink/ArrowLink.js';

import logoWhite from '../../assets/logo-white.png';
import equalHousing from '../../assets/equal-housing.png';
import phone from '../../assets/phone-small.png';
import email from '../../assets/email.png';

import '../../styles.css';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer max-w-container">
            <div className="max-w column align-center">
                <div className="footer-content flex justify-between w-100">
                    <div>
                        <h2><span>Counselors Mortgage</span></h2>
                        <div className="license flex justify-between align-center">
                            <div>
                                <h3 className="mb-1">NMLS# 323851</h3>
                                <ArrowLink to="/license" color="white">License</ArrowLink>
                            </div>
                            <img src={equalHousing} alt="Equal Housing Opportunity"/>
                        </div>
                        <div className="office">
                            <h3 className="mb-1">Office</h3>
                            <p>5500 Travis Green Ln</p>
                            <p>Austin, TX 78735-6322</p>
                        </div>
                        <ArrowLink to="/privacy-policy" color="white">Privacy Policy</ArrowLink>
                    </div>
                    <div className="contact">
                        <h3 className="relative mb-5"><span>Get in touch</span></h3>
                        <a href="mailto:awalker@couselorsmortgage.com">
                            AWalker@CouselorsMortgage.com
                            <img src={email} alt="Email"/>
                        </a>
                        <a href="tel:+15129169955">
                            (512) 916-9955
                            <img src={phone} alt="Phone"/>
                        </a>
                    </div>
                </div>
                <div className="copyright flex column align-center">
                    <img src={logoWhite} alt="Logo"/>
                    <p>© 2025 // Counselors Mortgage</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
