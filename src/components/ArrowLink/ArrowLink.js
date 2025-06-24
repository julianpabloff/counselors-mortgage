import { NavLink } from 'react-router';
import ArrowRight from '../ArrowRight/ArrowRight.js';

import './ArrowLink.css';

function ArrowLink({ color, size, to, children }) {
    const arrowColor = color ? color : 'inherit';

    return (
        <NavLink to={to} className="arrow-link">
            {children}
            <ArrowRight color={arrowColor}/>
        </NavLink>
    );
}

export default ArrowLink;
