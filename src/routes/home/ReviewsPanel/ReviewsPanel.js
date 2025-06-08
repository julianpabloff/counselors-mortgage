import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';

import '../../../styles.css';
import './ReviewsPanel.css';

function ReviewsPanel() {
    return (
        <section className="reviews-section max-w-container">
            <div className="max-w reviews-panel">
                <div className="left">
                    <h2>From Our Clients</h2>
                    <h3>What our clients say about their experience</h3>
                    <p>We have our clients to thank for our success, as all our business comes from our client's referrals. Many of them do repeat business with us because they are satisfied with their experience.</p>
                    <div class="fun-facts">
                    </div>
                    <ArrowLink to="/counselors-mortgage/reviews">See all reviews</ArrowLink>
                </div>
                <div className="right">
                </div>
            </div>
        </section>
    );
}

export default ReviewsPanel;
