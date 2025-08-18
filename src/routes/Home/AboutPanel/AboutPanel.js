import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';

import './AboutPanel.css';

function AboutPanel() {
    return (
        <section className="about max-w-container relative">
            <div className="max-w justify-between">
                <div className="img flex align-center justify-center">
                    <p>[image]</p>
                </div>
                <div className="content">
                    <h2>About Us</h2>
                    <p>Welcome to Counselors Mortgage, a friendly family-owned business dedicated to providing exceptional mortgage lending services. With over two decades of experience and a deep understanding of the industry, we deliver residential loan solutions with highly competitive interest rates.</p>
                    <ArrowLink to="/products" color="var(--dark-blue)">Our Company</ArrowLink>
                </div>
            </div>
        </section>
    );
}

export default AboutPanel;
