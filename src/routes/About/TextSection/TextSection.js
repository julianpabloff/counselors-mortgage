import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';
import BannerHeading from '../../../components/BannerHeading/BannerHeading.js';

import './TextSection.css';

function TextSection() {
    return (
        <section className="about-text">
            <div>
                <BannerHeading side="left">Who We Are</BannerHeading>
                <div className="max-w-container">
                    <p className="max-w-small">Welcome to Counselors Mortgage, a friendly family-owned business dedicated to providing exceptional mortgage lending services. With over two decades of experience and a deep understanding of the industry, we deliver residential loan solutions with highly competitive interest rates. Our commitment to superior service extends not only to our clients but also to the real estate partners and professionals who trust us with their referrals.</p>
                </div>
            </div>
            <div>
                <BannerHeading side="right">What We Do</BannerHeading>
                <div className="max-w-container">
                    <p className="max-w-small">At Counselors Mortgage, our mission is clear: we help clients finance their homes. Whether you're purchasing, renovating, or refinancing a property, we will find the best loan option tailored to your financial needs. Our goal is to ensure a smooth and successful lending experience for every borrower. Our favorite moment? Meeting with clients at the closing table to celebrate their new beginnings.</p>
                </div>
            </div>
            <div>
                <BannerHeading side="left">Our Clients</BannerHeading>
                <div className="max-w-container">
                    <p className="max-w-small column">
                        We are deeply grateful to our clients for their trust and loyalty. The majority of our business comes from referrals, and many clients return to us for their next home loan, reflecting their confidence in our ability to deliver outstanding results. We invite you to explore their reviews see the positive impact we’ve made.
                        <ArrowLink to="/reviews" color="var(--dark-blue">See Reviews</ArrowLink>
                    </p>
                </div>
            </div>
        </section>
    );
}
export default TextSection;
