import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';

import '../../../styles.css';
import './LandingImage.css';

function LandingImage() {
    return (
        <div className="landing-container max-w-container">
            <div className="max-w align-start">
                <div className="landing-text">
                    <h1>Let our family help yours.</h1>
                    <p>We make a commitment to you: we will help you qualify, apply, and be approved for the ideal mortgage for you.</p>
                    <ArrowLink to="/counselors-mortgage/about">ABOUT US</ArrowLink>
                </div>
            </div>
        </div>
    );
}

export default LandingImage;
