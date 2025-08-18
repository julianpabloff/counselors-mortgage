import { NavLink } from 'react-router';

const scrollToTop = () => window.scrollTo(0, 0);

function ScrollResetLink({ to, className, children }) {
    return (
        <NavLink to={to} className={className} onClick={scrollToTop}>
            {children}
        </NavLink>
    );
}

export default ScrollResetLink;
