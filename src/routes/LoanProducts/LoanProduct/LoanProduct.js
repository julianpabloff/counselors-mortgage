import './LoanProduct.css';

function ulFromStringArray(array, listKey = 0) {
    const li = [];
    for (let i = 0; i < array.length; i++) {
        const text = array[i];
        li.push(<li key={i}>{text}</li>);
    }
    return <ul key={listKey}>{li}</ul>;
}

function generateDescription(description) {
    const jsx = [];
    const length = description.length;
    for (let i = 0; i < length; i++) {
        const data = description[i];
        const key = i + 1;

        const type = typeof(data);
        if (type == 'string')
            jsx.push(<p key={key}>{data}</p>);
        else if (type == 'object')
            jsx.push(ulFromStringArray(data, key));
    };
    return jsx;
}

function LoanProduct({ title, slogan, description }) {
    return (
        <div className="loan-product">
            <div className="title">
                <h3>{title}</h3>
                {slogan ? <h4>{slogan}</h4> : <div className="line"></div>}
            </div>
            {generateDescription(description)}
        </div>
    );
}

export default LoanProduct;
