import ProductsLanding from './ProductsLanding/ProductsLanding.js';
import ProductNavButton from './ProductNavButton/ProductNavButton.js';
import LoanCategory from './LoanCategory/LoanCategory.js';

import { loanData } from './loanData.js';

const productNavButtons = [];
const loanCategories = [];

let i = 0;
loanData.map(category => {
    productNavButtons.push(
        <ProductNavButton
            key={category.hashId}
            hashId={category.hashId}
            title={category.buttonTitle}
            icon={category.icon}
        />
    );

    const theme = i % 2 ? 'dark' : 'light';
    loanCategories.push(
        <LoanCategory
            key={category.hashId}
            hashId={category.hashId}
            title={category.title}
            theme={theme}
            products={category.products}
        />
    );
    i++;
});

function Products() {
    return (
        <div>
            <ProductsLanding productNavButtons={productNavButtons}/>
            {loanCategories}
        </div>
    );
}

export default Products;
