import { useEffect, useRef } from 'react';

import './AboutHeading.css';

function AboutHeading({ side, children }) {
    const className = `about-heading max-w-container ${side}`;
    const container = useRef(null);
    const h2 = useRef(null);

    useEffect(() => {
        const h2Width = h2.current.offsetWidth;
        container.current.style.setProperty('--h2-width', h2Width + 'px');
    }, []);

    return (
        <div ref={container} className={className}>
            <div className="max-w-small">
                <h2 ref={h2}>{children}</h2>
                <div className="background"></div>
            </div>
        </div>
    );
}

export default AboutHeading;
