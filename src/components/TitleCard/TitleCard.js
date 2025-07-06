import './TitleCard.css';

function TitleCard({ title, style, children }) {
    return (
        <div className={`title-card ${style}`}>
            <h1 className="mb-2">{title}</h1>
            <p>{children}</p>
        </div>
    )
}

export default TitleCard;
