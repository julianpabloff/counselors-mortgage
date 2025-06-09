import LoanLanding from './LoanLanding/LoanLanding.js';
import LoanNavButton from './LoanNavButton/LoanNavButton.js';
import LoanCategory from './LoanCategory/LoanCategory.js';

import { loanData } from './loanData.js';

const loanNavButtons = [];
const loanCategories = [];

let i = 0;
loanData.map(category => {
    loanNavButtons.push(
        <LoanNavButton
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

function LoanProducts() {
    return (
        <div>
            <LoanLanding loanNavButtons={loanNavButtons}/>
            {loanCategories}
        </div>
    );
}

export default LoanProducts;
