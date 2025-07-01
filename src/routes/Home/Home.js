import LandingImage from './LandingImage/LandingImage.js';
import ReviewsPanel from './ReviewsPanel/ReviewsPanel.js';
import AboutPanel from './AboutPanel/AboutPanel.js';

function Home() {
    return (
        <div>
            <LandingImage/>
            <ReviewsPanel/>
            {/* <AboutPanel/> */}
            {/* <ProductsPanel/> */}
        </div>
    );
}

export default Home;
