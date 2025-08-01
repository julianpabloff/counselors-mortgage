import PrivacySection from './PrivacySection/PrivacySection.js';
import PrivacyTable from './PrivacyTable/PrivacyTable.js';

import './Privacy.css';

function Privacy() {
    return (
        <section className="privacy max-w-container">
            <div className="max-w-small column">
                <h1>Our Privacy Policy</h1>
                <PrivacySection heading="How we collect, protect and share your personal information">
                    <p>Financial companies choose how they share your personal information. Federal law gives consumers the right to limit some but not all sharing. Federal law also required us to tell you how we collect, share, and protect your personal information. Please read this notice carefully to understand what we do.</p>
                </PrivacySection>
                <PrivacySection heading="What personal information do we collect and share?">
                    <p>The types of personal information we collect and share depend on the product or service you have with us. This information can include:</p>
                    <ul>
                        <li>Social Security Number and income</li>
                        <li>Assets and employment information</li>
                        <li>Payment history and account balances</li>
                    </ul>
                    <p>When you are no longer our customer, we continue to share your information as described in this notice.</p>
                </PrivacySection>
                <PrivacySection heading="How is your personal information protected?">
                    <p>When you apply for a loan, we collect your personal information. To protect your personal information from unauthorized access and use, we use security measures that comply with federal law. These measures include computer safeguards and secured files and buildings.</p>
                </PrivacySection>
                <PrivacySection heading="How is your personal information shared?">
                    <p>All financial companies need to share customers' personal information to run their everyday business. In the section below, we list the reasons  financial companies can share their customers' personal information, the reasons we chooses to share, and whether you can limit this sharing.</p>
                    <PrivacyTable/>
                </PrivacySection>
                <PrivacySection heading="Is it possible to limit all sharing?">
                    <p>Federal law gives you the right to limit only:</p>
                    <ul>
                        <li>Sharing for affiliates' everyday business purposes - information about your creditworthiness</li>
                        <li>Affiliates from using your information to market to you</li>
                        <li>Sharing for non-affiliates to market to you</li>
                    </ul>
                    <p>State Laws and individual companies may give you additional rights to limit sharing.</p>
                </PrivacySection>
                <PrivacySection heading="Definitions">
                    <div className="definition">
                        <h3>Affiliates</h3>
                        <p>Companies related by common ownership or control. They can be financial and non-financial companies.</p>
                        <p><i>Counselors Mortgage has no affiliates.</i></p>
                    </div>
                    <div className="definition">
                        <h3>Non-Affiliates</h3>
                        <p>Companies not related by common ownership or control. They can be financial and non-financial companies.</p>
                    </div>
                    <div className="definition">
                        <h3>Joint Marketing</h3>
                        <p>A formal agreement between non-affiliated financial companies that together market financial products or services to you.</p>
                    </div>
                </PrivacySection>
            </div>
        </section>
    );
}

export default Privacy;
