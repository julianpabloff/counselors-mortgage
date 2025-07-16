import BannerHeading from '../../../components/BannerHeading/BannerHeading.js';
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
        <section className={`loan-category ${theme}`}>
            <BannerHeading key={hashId + "-heading"} side="left" hashId={hashId}>{title}</BannerHeading>
            <div key={hashId} className="max-w-container">
                <div className="max-w-small loan-products">{loanProducts}</div>
            </div>
        </section>
    );
}

export default LoanCategory;
