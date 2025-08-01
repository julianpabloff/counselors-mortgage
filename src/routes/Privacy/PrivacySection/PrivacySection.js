import './PrivacySection.css';

function PrivacySection({ heading, children }) {
    return (
        <div className="privacy-section">
            <h2>{heading}</h2>
            {children}
        </div>
    );
}

export default PrivacySection;
