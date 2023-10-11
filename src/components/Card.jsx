import './Card.css'

function Card(props) {
    let { label, price } = props
    return (
        <a href="">
            <article className="card">
                <div className="card-image">
                    <img src="/images/ruslan-bardash.jpg" alt="" />
                </div>
                <div className="card-text">
                    <h2>{label}</h2>
                    <p>{price}kr</p>
                </div>
            </article>
        </a>
    )
}

export default Card