import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';
import ZillowButton from '../ZillowButton/ZillowButton.js';
import ReviewSlider from '../ReviewSlider/ReviewSlider.js';

import '../../../styles.css';
import './ReviewsPanel.css';

const reviewsJSON = require('../../../data/reviews.json');

function ReviewsPanel() {
    return (
        <section className="reviews-section max-w-container">
            <div className="max-w reviews-panel justify-between">
                <div className="left flex column justify-center">
                    <div>
                        <h2>From Our Clients</h2>
                        <h3 className="subheading">What our clients say about their experience</h3>
                    </div>
                    <p>We have our clients to thank for our success, as all our business comes from our client's referrals. Many of them do repeat business with us because they are satisfied with their experience.</p>
                    <ul>
                        <li>We have over a <b>100 reviews</b> on Zillow for Jim and Andrea</li>
                        <li>100% of our reviews are <b>5-star</b></li>
                        <li>Many of our clients say their interest rate is <b>lower than expected</b></li>
                    </ul>
                    <ZillowButton/>
                </div>
                <div className="right flex column justify-between">
                    <div className="reviews-container">
                        <ReviewSlider reviews={reviewsJSON}/>
                    </div>
                    <ArrowLink to="/reviews" color="var(--dark-blue)">See all reviews</ArrowLink>
                </div>
            </div>
        </section>
    );
}

export default ReviewsPanel;
