import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';
import ZillowButton from '../ZillowButton/ZillowButton.js';
import Review from '../Review/Review.js';

import '../../../styles.css';
import './ReviewsPanel.css';

const reviews = [
    {
        text: 'I was referred to Jim and Andrea, and from the beginning Jim was friendly and patient answering all my questions, as well as providing some helpful insight as to my best options. During the process, they were attentive and updated me as much  as possible, so I wasn\'t in the dark. At closing, Jim and Andrea personally showed up to make sure everything went well, and that I was taken care of. Super sweet people that do good work.',
        name: 'Juan Wah',
        location: 'Austin, TX'
    },
    {
        text: 'Jim and Andrea have been absolutely  remarkable through every step of this process. They explained everything to us in great detail, worked late hours to get us the house and really went above and beyond. They came highly recommended and we can see why.',
        name: 'Rinita Laud and Kwami Roberts',
        location: 'Houston, TX'
    }
];

function ReviewsPanel() {
    return (
        <section className="reviews-section max-w-container">
            <div className="max-w reviews-panel justify-between">
                <div className="left flex column justify-between">
                    <div>
                        <h2>From Our Clients</h2>
                        <h3>What our clients say about their experience</h3>
                    </div>
                    <p>We have our clients to thank for our success, as all our business comes from our client's referrals. Many of them do repeat business with us because they are satisfied with their experience.</p>
                    <ul>
                        <li>We have over a 100 reviews on Zillow for Jim and Andrea</li>
                        <li>100% of our reviews are 5-star</li>
                        <li>60% of our clients say their interest rate is lower than expected</li>
                    </ul>
                    <ZillowButton/>
                </div>
                <div className="right flex column justify-between">
                    <Review {...reviews[0]}/>
                    <Review {...reviews[1]}/>
                    <ArrowLink to="/counselors-mortgage/reviews">See more reviews</ArrowLink>
                </div>
            </div>
        </section>
    );
}

export default ReviewsPanel;
