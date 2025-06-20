import leftQuote from '../../../assets/quote-left.png';
import rightQuote from '../../../assets/quote-right.png';

import './Review.css';

function Review({ text, name, location }) {
    return (
        <div className="review">
            <p className="review-text relative">
                {text}
                <img src={leftQuote} alt="Quotation Mark" className="left-quote"/>
                <img src={rightQuote} alt="Quotation Mark" className="right-quote"/>
            </p>
            <div className="flex align-center">
                <p className="name">{name}</p>
                <span>|</span>
                <p className="location">{location}</p>
            </div>
        </div>
    );
}

export default Review;
