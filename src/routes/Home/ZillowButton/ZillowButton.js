import zillowLogo from '../../../assets/zillow.png';

import './ZillowButton.css';

function ZillowButton() {
    const url = 'https://www.zillow.com/lender-profile/Jim%20D%20Walker/';

    return (
        <a href={url} target="_blank" className="zillow-button">
            Visit reviews on
            <img className="zillow-logo" src={zillowLogo}/>
        </a>
    );
}

export default ZillowButton;
