import './LoanCategory.css';

function LoanCategory({ hashId, title, theme, products }) {
    return (
        <div className={`max-w-container ${theme}`}>
            <section className="max-w-small loan-category">
                <h2 id={hashId}>{title}</h2>
            </section>
        </div>
    );
}

export default LoanCategory;
