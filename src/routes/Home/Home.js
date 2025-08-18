import HomeLanding from './HomeLanding/HomeLanding.js';
import ReviewsPanel from './ReviewsPanel/ReviewsPanel.js';
import AboutPanel from './AboutPanel/AboutPanel.js';
import ProductsPanel from './ProductsPanel/ProductsPanel.js';

function Home() {
    return (
        <>
            <HomeLanding/>
            <ReviewsPanel/>
            <AboutPanel/>
            <ProductsPanel/>
        </>
    );
}

export default Home;
