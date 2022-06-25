import React from "react";

function Card(props: { item: {coverImg: string; stats: {reviewCount: number; rating: number;}; location: string; title: string; price: number; openSpots: number} }) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`/Images/${props.item.coverImg}`} alt="Katie Zaferes" className="card-image" />
            <div className="card-stats">
                <img src="/Images/star.png" className="card-star" alt="Star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;