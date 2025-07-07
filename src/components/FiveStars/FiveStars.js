import Star from '../Star/Star.js';

import './FiveStars.css';

function FiveStars({ color, size }) {
    const starColor = color ? color : 'var(--light-blue)';

    let width, height, gap;
    switch (size) {
        case 'small':
            width = height = '2rem';
            gap = '2rem';
            break;
        default:
            width = height = '2.3rem';
            gap = '3rem';
    }

    return (
        <div className="flex" style={{gap: gap}}>
            <Star color={starColor} width={width} height={height} />
            <Star color={starColor} width={width} height={height} />
            <Star color={starColor} width={width} height={height} />
            <Star color={starColor} width={width} height={height} />
            <Star color={starColor} width={width} height={height} />
        </div>
    );
}

export default FiveStars;
