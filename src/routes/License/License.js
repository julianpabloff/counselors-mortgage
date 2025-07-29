import nmls from '../../assets/nmls.gif';
import equalHousing from '../../assets/equal-housing-black.gif';

import './License.css';

function License() {
    return (
        <section className="license max-w-container">
            <div className="max-w column">
                <h1>We Are Licensed in Texas Under NMLS ID 323851</h1>
                <h2>Search the <a href="https://www.nmlsconsumeraccess.org/">National Mortgage Licensing System</a> using our NMLS ID 323851</h2>
                <p className="spaced"><b>Counselors Mortgage Corporation</b> is licensed under the laws of the state of texas and by state law is subject to regulatory oversight by the <b>Texas Department of Savings and Mortgage Lending.</b></p>
                <p className="underline mb-20"><b>Texas Residents:</b></p>
                <p>Consumers wishing to file a complaint against a mortgage company or residential mortgage loan originator licensed in Texas should send a completed complaint form to:</p>
                <blockquote>
                    <p>The Department of Savings and Mortgage Lending (SML)</p>
                    <p>2601 North Lamar Blvd, Suite 201</p>
                    <p>Austin, Texas 78705</p>
                    <p>Tel: 1-877-276-5550</p>
                </blockquote>
                <p>Information and forms are available at <a href="http://www.sml.texas.gov/"><b>sml.texas.gov</b></a></p>
                <div className="images">
                    <a href="http://www.nmlsconsumeraccess.org/">
                        <img src={nmls} alt="National Mortgage Licensing System"/>
                    </a>
                    <img src={equalHousing} alt="Equal Housing Opportunity"/>
                </div>
            </div>
        </section>
    );
}

export default License;
