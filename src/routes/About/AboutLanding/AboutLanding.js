import logo from '../../../assets/logo.png';

import diningLarge from '../../../assets/dining-room.jpg';
import diningMedium from '../../../assets/dining-room-tablet.jpg';
import diningSmall from '../../../assets/dining-room-mobile.jpg';

import './AboutLanding.css';

function AboutLanding() {
    return (
        <div className="about-landing">
            <div>
                <img className="logo" src={logo} alt="Logo"/>
                <h1>Meet The Team</h1>
            </div>
            <img
                className="landing-image"
                srcSet={`${diningSmall} 724w, ${diningMedium} 1253w, ${diningLarge} 3864w`}
                sizes="(width <= 500px) 724px,
                       (width <= 1000px) 1253px,
                       3864px"
                src={diningLarge}
                alt="Nice dining room"
            />
        </div>
    );
}

export default AboutLanding;
