import '../../../styles.css';
import './ProductsLanding.css';

function ProductsLanding({ productNavButtons }) {
    // const navButtons = loanData.map(l =>
    //     <LoanNavButton key={l.hashId} icon={l.icon} to={`#${l.hashId}`}>{l.buttonTitle}</LoanNavButton>
    // );

    return (
        <div className="loan-landing flex column align-center justify-evenly">
            <div className="title-card">
                <h1 className="mb-2">Loan Products</h1>
                <p>Your success is our priority, and we offer a wide variety of solutions to suit your needs.</p>
            </div>
            <div className="max-w-container">
                <div className="max-w-small justify-between">
                    {productNavButtons}
                </div>
            </div>
        </div>
    );
}

export default ProductsLanding;
