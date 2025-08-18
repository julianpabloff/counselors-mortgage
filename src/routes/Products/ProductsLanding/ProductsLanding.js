import TitleCard from '../../../components/TitleCard/TitleCard.js';

import roomLarge from '../../../assets/living-room.jpg';
import roomMedium from '../../../assets/living-room-tablet.jpg';
import roomSmall from '../../../assets/living-room-mobile.jpg';

import '../../../styles.css';
import './ProductsLanding.css';

function ProductsLanding({ productNavButtons }) {
    return (
        <div className="products-landing">
            <TitleCard title="Loan Products" style="dark">
                Your success is our priority, and we offer a wide variety of solutions to suit your needs.
            </TitleCard>
            <div className="max-w-container">
                <div className="nav-button-container max-w-small">
                    {productNavButtons}
                </div>
            </div>
            <img
                className="landing-image"
                srcSet={`${roomSmall} 724w, ${roomMedium} 1253w, ${roomLarge} 3864w`}
                sizes="(width <= 500px) 724px,
                       (width <= 1000px) 1253px,
                       3864px"
                src={roomLarge}
                alt="Fancy living room"
            />
        </div>
    );
}

export default ProductsLanding;
