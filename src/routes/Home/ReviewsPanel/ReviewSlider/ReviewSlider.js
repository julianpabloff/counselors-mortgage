import { useEffect, useState } from 'react';
import Review from '../../../../components/Review/Review.js';

import './ReviewSlider.css';

function shuffleReviews(reviews) {
    const length = reviews.length;
    for (let i in reviews) {
        const randomIndex = Math.floor(Math.random() * length);
        let temp = reviews[i];
        reviews[i] = reviews[randomIndex];
        reviews[randomIndex] = temp;
    }
}

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
function getReviews(reviews, startIndex) {
    const totalReviews = reviews.length;

    let i = startIndex;
    const advance = () => i = (i + 1) % totalReviews;

    const firstReview = reviews[i];
    const reviewsToGenerate = [firstReview];
    advance();

    const secondReview = reviews[i];
    const charCount = firstReview.text.length + secondReview.text.length;
    const charMax = (window.innerWidth < 1000) ? 400 : 800;

    if (charCount < charMax) {
        reviewsToGenerate.push(secondReview);
        advance();
    }

    const jsx = generateReviewsJSX(reviewsToGenerate);
    return [jsx, i];
}

function ReviewTransitioner({ reviewsJSX }) {
    const [container0, setContainer0] = useState();
    const [container1, setContainer1] = useState();
    const [activeContainer, setActiveContainer] = useState(0);

    useEffect(() => {
        if (container0) {
            if (activeContainer == 0) {
                setContainer1(reviewsJSX);
                setActiveContainer(1);
            } else { // == 1
                setContainer0(reviewsJSX);
                setActiveContainer(0);
            }
        } else setContainer0(reviewsJSX);
    }, [reviewsJSX]);

    return (
        <div className="review-slider-container">
            <div className={activeContainer != 0 ? 'hidden' : undefined}>{container0}</div>
            <div className={activeContainer != 1 ? 'hidden' : undefined}>{container1}</div>
        </div>
    );
}

function ReviewSlider({ reviews }) {
    const [reviewsJSX, setReviewsJSX] = useState();
    const [nextIndex, setNextIndex] = useState(0);

    function cycleReviews() {
        const [jsx, next] = getReviews(reviews, nextIndex);
        setReviewsJSX(jsx);
        setNextIndex(next);
    }

    useEffect(() => { // init
        shuffleReviews(reviews);
        cycleReviews();
    }, []);

    const cycleTime = 7000;
    useEffect(() => {setTimeout(cycleReviews, cycleTime)}, [nextIndex]);

    return <ReviewTransitioner reviewsJSX={reviewsJSX}/>;
}

export default ReviewSlider;
