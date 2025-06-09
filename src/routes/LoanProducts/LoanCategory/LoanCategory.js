import LoanProduct from '../LoanProduct/LoanProduct.js';

import './LoanCategory.css';

function LoanCategory({ hashId, title, theme, products }) {
    let i = 0;
    const loanProducts = products.map(product => {
        i++;
        return <LoanProduct
            key={i}
            title={product.title}
            slogan={product.slogan}
            description={product.description}
        />
    });

    return (
        <div className={`max-w-container ${theme}`}>
            <section className="max-w-small loan-category">
                <h2 id={hashId}>{title}</h2>
                {loanProducts}
            </section>
        </div>
    );
}

export default LoanCategory;
