import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';

import modernHouse from '../../../assets/modern-house.jpg';
import logoHouse from '../../../assets/cm-house.jpg';
import './AboutPanel.css';

function AboutPanel() {
    return (
        <section className="about max-w-container relative">
            <div className="max-w justify-between">
                <div className="content">
                    <h2>About Us</h2>
                    <p>Welcome to Counselors Mortgage, a friendly family-owned business dedicated to providing exceptional mortgage lending services. With over two decades of experience and a deep understanding of the industry, we deliver residential loan solutions with highly competitive interest rates.</p>
                    <ArrowLink to="/about" color="var(--dark-blue)">Our Company</ArrowLink>
                </div>
                <div className="img flex justify-center">
                    <img src={modernHouse}/>
                </div>
            </div>
        </section>
    );
}

export default AboutPanel;
