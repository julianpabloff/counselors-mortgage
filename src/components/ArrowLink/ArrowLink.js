import { NavLink } from 'react-router';
import ArrowRight from '../ArrowRight/ArrowRight.js';

import './ArrowLink.css';

function ArrowLink(props) {
    return (
        <NavLink to={props.to} className="arrow-link">
            {props.children}
            <ArrowRight color="white"/>
        </NavLink>
    );
}

export default ArrowLink;
