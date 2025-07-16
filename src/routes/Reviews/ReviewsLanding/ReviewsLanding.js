import TitleCard from '../../../components/TitleCard/TitleCard.js';

import familyLarge from '../../../assets/family.jpg';
import familyMedium from '../../../assets/family-tablet.jpg';
import familySmall from '../../../assets/family-mobile.jpg';

import './ReviewsLanding.css';

function ReviewsLanding() {
    return (
        <div className="reveiws-landing">
            <TitleCard title="Client Testimonials" style="light">
                We have built our business by referrals and are very grateful to our clients and realtor business partners for their positive reviews and referrals over the years. We will make sure that your experience with us is just as positive.
            </TitleCard>
            <img
                className="landing-image"
                srcSet={`${familySmall} 724w, ${familyMedium} 1253w, ${familyLarge} 3000w`}
                sizes="(width <= 500px) 724px,
                       (width <= 1000px) 1253px,
                       3000px"
                src={familyLarge}
                alt="Happy family in field"
            />
        </div>
    );
}

export default ReviewsLanding;
