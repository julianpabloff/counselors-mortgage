import Review from '../../../components/Review/Review.js';

import './ReviewGrid.css';

function shuffleReviews(reviews) {
    const length = reviews.length;
    for (let i in reviews) {
        const randomIndex = Math.floor(Math.random() * length);
        let temp = reviews[i];
        reviews[i] = reviews[randomIndex];
        reviews[randomIndex] = temp;
    }
}

const reviewsJSON = require('../../../data/reviews.json');
// shuffleReviews(reviewsJSON);
const column1 = [];
const column2 = [];
for (let i in reviewsJSON) {
    const review = reviewsJSON[i];
    const jsx = <Review key={i} {...review}/>;
    if (i % 2) column2.push(jsx);
    else column1.push(jsx);
}

function ReviewGrid() {
    return (
        <section className="max-w-container reviews">
            <div className="max-w block">
                <h2><span>From Our Clients</span></h2>
                <div className="review-grid">
                    <div>{column1}</div>
                    <div>{column2}</div>
                </div>
            </div>
        </section>
    );
}

export default ReviewGrid;
