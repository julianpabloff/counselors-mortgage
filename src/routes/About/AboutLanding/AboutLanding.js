import logo from '../../../assets/logo.png';

import kitchenLarge from '../../../assets/kitchen.jpg';
import kitchenMedium from '../../../assets/kitchen-tablet.jpg';
import kitchenSmall from '../../../assets/kitchen-mobile.jpg';

import './AboutLanding.css';

function AboutLanding() {
    return (
        <div className="about-landing">
            <div>
                <img className="logo" src={logo} alt="Logo"/>
                <h1 className="mb-2">Counselors Mortgage</h1>
                <h2 className="subheading">Meet The Team</h2>
            </div>
            <img
                className="landing-image"
                srcSet={`${kitchenSmall} 724w, ${kitchenMedium} 1253w, ${kitchenLarge} 3864w`}
                sizes="(width <= 500px) 724px,
                       (width <= 1000px) 1253px,
                       3864px"
                src={kitchenLarge}
                alt="Modern minimal kitchen"
            />
        </div>
    );
}

export default AboutLanding;
