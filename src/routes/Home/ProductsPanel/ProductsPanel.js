import ArrowLink from '../../../components/ArrowLink/ArrowLink.js';

import kitchen from '../../../assets/kitchen.jpg';
import './ProductsPanel.css';

function ProductsPanel() {
    // const baseUrl = 'http://localhost:3000/counselors-mortgage'; // LOCAL
    const baseUrl = 'https://julianpabloff.github.io/counselors-mortgage'; // DEV

    return (
        <section className="products max-w-container relative">
            <div className="max-w justify-between">
                <div className="content">
                    <h2>What We Offer</h2>
                    <p>Click here to see the basic differences between loan products we offer. This is not an exhaustive list of options. To determine the best fit for you, call us at <a href="tel:+15129169955">512-916-9955</a> and we will guide you through the decision process.</p>
                    <ArrowLink to="/products" color="white">Loan Products</ArrowLink>
                </div>
                <div className="category-buttons">
                    <a href={`${baseUrl}/products#home-loan`}>Home Loan</a>
                    <a href={`${baseUrl}/products#self-employed`}>Self-Employed</a>
                    <a href={`${baseUrl}/products#investors`}>Investors</a>
                </div>
            </div>
            <img src={kitchen}/>
        </section>
    );
}

export default ProductsPanel;
