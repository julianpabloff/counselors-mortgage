import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';

import './Profile.css';

function Profile({ name, image, alt, nmls, zillow, reversed, children }) {
    const className = `profile max-w-container ${reversed ? 'right' : 'left'}`;
    return (
        <div className={className}>
            <div className="max-w-small">
                <img src={image} alt={alt}/>
                <div>
                    <h2 className="mb-1">{name}</h2>
                    <h3 className="subheading">Residential Mortgage Loan Originator</h3>
                    <p className="nmls">Licensed in Texas, NMLS# {nmls}</p>
                    {children}
                    {zillow &&
                        <div>
                            <br/>
                            <ArrowLink to={zillow} size="small" color="var(--light-blue)" newtab>Zillow Reviews</ArrowLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;
