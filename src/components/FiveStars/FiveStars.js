import star from '../../assets/star.svg';

import './FiveStars.css';

function FiveStars({ color }) {
    const starColor = color ? color : 'var(--light-blue)';

    return (
        <div className="five-stars">
            <img src={star} alt="Star"/>
            <img src={star} alt="Star"/>
            <img src={star} alt="Star"/>
            <img src={star} alt="Star"/>
            <img src={star} alt="Star"/>
        </div>
    );
}

export default FiveStars;
