import TitleCard from '../../../components/TitleCard/TitleCard.js';

import '../../../styles.css';
import './ProductsLanding.css';

function ProductsLanding({ productNavButtons }) {
    return (
        <div className="products-landing">
            <TitleCard title="Loan Products" style="dark">
                Your success is our priority, and we offer a wide variety of solutions to suit your needs.
            </TitleCard>
            <div className="max-w-container">
                <div className="max-w-small justify-between">
                    {productNavButtons}
                </div>
            </div>
        </div>
    );
}

export default ProductsLanding;
