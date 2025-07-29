import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';

import houseLarge from '../../../assets/house.jpg';
import houseMedium from '../../../assets/house-tablet.jpg';
import houseSmall from '../../../assets/house-mobile.jpg';

import '../../../styles.css';
import './HomeLanding.css';

function HomeLanding() {
    return (
        <div className="home-landing">
            <div className="landing-text">
                <h1>Let our family help yours.</h1>
                    <p>For over 25 years, we've helped homebuyers secure the right loan with great rates, trusted guidance, and a smooth, stress-free process. Whether you're buying your first home or your forever home, we are here to make it simple.</p>
                    {/* <p>For over 25 years, we've helped homebuyers secure the right loan with great rates, trusted guidance, and a smooth, stress-free process.</p> */}
                    {/* <p>We make a commitment to you: we will help you qualify, apply, and be approved for the ideal mortgage for you.</p> */}
                    <ArrowLink to="/products" color="white">Loan Products</ArrowLink>
            </div>
            <img
                srcSet={`${houseSmall} 724w, ${houseMedium} 1253w, ${houseLarge} 3864w`}
                sizes="(width <= 500px) 724px,
                (width <= 1000px) 1253px,
                3864px"
                src={houseLarge}
                alt="Yellow house in Texas"
            />
        </div>
    );
}

export default HomeLanding;
