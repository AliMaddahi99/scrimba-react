function Card(props: { card: { id: number; title: string; location: string; googleMapsUrl: string; startDate: string; endDate: string; description: string; imageUrl: string; } }) {
    return (
        <div className="card">
            <img className="card-img" src={props.card.imageUrl} alt="" />
            <div className="card-content">
                <p className="card-location"><i className="bi bi-geo-alt-fill"></i> {props.card.location} <a href={props.card.googleMapsUrl}>View on Google Maps</a></p>
                <h1 className="card-title">{props.card.title}</h1>
                <p className="card-date"><span>{props.card.startDate}</span> - <span>{props.card.endDate}</span></p>
                <p className="card-text">
                    {props.card.description}
                </p>
            </div>
            <hr />
        </div>
    );
}

export default Card;
