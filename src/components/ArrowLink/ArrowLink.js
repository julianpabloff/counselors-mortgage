import { NavLink } from 'react-router';
import ArrowRight from '../ArrowRight/ArrowRight.js';

import './ArrowLink.css';

function ArrowLink({ color, size, to, newtab, children }) {
    const arrowColor = color ? color : 'inherit';
    const arrowSize = size ? size : '';

    return (
        <NavLink
            to={to}
            className={`arrow-link ${arrowSize}`}
            target={newtab ? '_blank' : '_self'}
            onClick={() => window.scrollTo(0,0)}
        >
            {children}
            <ArrowRight color={arrowColor}/>
        </NavLink>
    );
}

export default ArrowLink;
