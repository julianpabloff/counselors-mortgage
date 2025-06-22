import { useEffect, useState } from 'react';
import Review from '../Review/Review.js';

// Generates the actual JSX, given a list of reviews to display
function generateReviewsJSX(reviews) {
    const output = [];
    let i = 1;
    reviews.map(review => {
        output.push(<Review key={i} {...review}/>)
        i++;
    });
    return output;
}

/*
    Uses knowledge of where in the reviews array we are, in order to get
    the next page of reviews, and then updates the new array location
*/
function getReviews(reviews, index, setNextIndex) {
    const charMax = 800;
    const totalReviews = reviews.length;

    let i = index;
    const advance = () => i = (i + 1) % totalReviews;

    const firstReview = reviews[i];
    const reviewsToGenerate = [firstReview];
    advance();

    const secondReview = reviews[i];
    const charCount = firstReview.text.length + secondReview.text.length;
    if (charCount < charMax) {
        reviewsToGenerate.push(secondReview);
        advance();
    }

    setNextIndex(i);
    const jsx = generateReviewsJSX(reviewsToGenerate);
    return jsx;
}

function ReviewSlider({ reviews }) {
    const [reviewsJSX, setReviewsJSX] = useState();
    const [nextIndex, setNextIndex] = useState(0);

    function cycleReviews() {
        const jsx = getReviews(reviews, nextIndex, setNextIndex);
        setReviewsJSX(jsx);
    }

    useEffect(cycleReviews, []);
    useEffect(() => {setTimeout(cycleReviews, 6000)}, [nextIndex]);

    return reviewsJSX;
}

export default ReviewSlider;
