import FiveStars from '../../../components/FiveStars/FiveStars.js';

import logo from '../../../assets/logo.png';

import './AboutLanding.css';

function AboutLanding() {
    return (
        <div className="about-landing">
            <img src={logo} alt="Logo"/>
            <h1>Meet Counselors Mortgage</h1>
            <FiveStars/>
        </div>
    );
}

export default AboutLanding;
