import './ProductNavButton.css';

function ProductNavButton({ hashId, title, icon }) {
    // Slightly decrease font size for more text
    const className = title.length < 20 ? 'loan-nav' : 'loan-nav smaller';

    return (
        <a href={`#${hashId}`} className={className}>
            <img src={icon}/>
            {title}
        </a>
    );
}

export default ProductNavButton;
