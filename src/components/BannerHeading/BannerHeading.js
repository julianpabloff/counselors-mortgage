import { useEffect, useRef } from 'react';

import './BannerHeading.css';

function BannerHeading({ side, hashId, children }) {
    const className = `banner-heading max-w-container ${side}`;
    const container = useRef(null);
    const h2 = useRef(null);

    useEffect(() => {
        const h2Width = h2.current.offsetWidth;
        container.current.style.setProperty('--h2-width', h2Width + 'px');
    }, []);

    return (
        <div ref={container} className={className}>
            <div className="max-w-small">
                <h2 id={hashId && hashId} ref={h2}>{children}</h2>
                <div className="background"></div>
            </div>
        </div>
    );
}

export default BannerHeading;
