import "./card.styles.css"

export function Card ({cardDetails}) {
    // console.log(cardDetails)
    return (
        <div className="card-container" key={cardDetails.id}>
            <img src={`https://robohash.org/${cardDetails.id}?set=set1&size=180x180`} alt="monster" />
            <h2>{cardDetails.name}</h2>
            <p>{cardDetails.email}</p>
            <p>{cardDetails.id}</p>
            <p>{cardDetails.username}</p>
            <p>{cardDetails.phone}</p>
            <p>{cardDetails.address.city}</p>
            <p>{cardDetails.company.bs}</p>
        </div>
    )
}