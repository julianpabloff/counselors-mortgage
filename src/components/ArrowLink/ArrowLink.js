import { NavLink } from 'react-router';
import ArrowRight from '../ArrowRight/ArrowRight.js';

import './ArrowLink.css';

function ArrowLink(props) {
    const { color, size, to } = props;
    const arrowColor = color ? color : 'inherit';

    return (
        <NavLink to={to} className="arrow-link">
            {props.children}
            <ArrowRight color={arrowColor}/>
        </NavLink>
    );
}

export default ArrowLink;
