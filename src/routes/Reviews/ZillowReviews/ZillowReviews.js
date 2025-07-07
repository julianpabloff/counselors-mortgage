import FiveStars from '../../../components/FiveStars/FiveStars.js';
import ProfileLink from './ProfileLink/ProfileLink.js';

import zillowLogo from '../../../assets/zillow.png';
import zillowJim from '../../../assets/jim-zillow.jpg';
import zillowAndrea from '../../../assets/andrea-zillow.jpg';

import './ZillowReviews.css';

function ZillowReviews () {
    return (
        <div className="zillow-reviews">
            <div className="heading">
                <img src={zillowLogo}/>
                <span>Reviews</span>
            </div>
            <div className="profile-links">
                <ProfileLink
                    name="Jim Walker"
                    image={zillowJim}
                    link="https://www.zillow.com/lender-profile/Jim%20D%20Walker/"
                />
                <ProfileLink
                    name="Andrea Walker"
                    image={zillowAndrea}
                    link="https://www.zillow.com/lender-profile/awalker780/"
                />
            </div>
            <FiveStars color="var(--zillow-blue)" size="small"/>
        </div>
    );
}

export default ZillowReviews;
