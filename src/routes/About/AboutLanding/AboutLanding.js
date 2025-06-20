import logo from '../../../assets/logo.png';
import star from '../../../assets/star.svg';

import './AboutLanding.css';

function AboutLanding() {
    return (
        <div className="about-landing">
            <img src={logo} alt="Logo"/>
            <h1>Meet Counselors Mortgage</h1>
            <div className="five-stars">
                <img className="star" src={star} alt="Star"/>
                <img className="star" src={star} alt="Star"/>
                <img className="star" src={star} alt="Star"/>
                <img className="star" src={star} alt="Star"/>
                <img className="star" src={star} alt="Star"/>
            </div>
        </div>
    );
}

export default AboutLanding;
