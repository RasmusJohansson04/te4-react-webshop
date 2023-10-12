import { Link } from 'react-router-dom'
import './Card.css'

function Card(props) {
    let { label, price } = props
    return (
        <div className="card-container">
            <Link className='nav-link' to={'/produkt'}>
                <article className="card">
                    <div className="card-image">
                        <img src="/images/ruslan-bardash.jpg" alt="" />
                    </div>
                    <div className="card-text">
                        <h2>{label}</h2>
                        <p>{price}kr</p>
                    </div>
                </article>
            </Link>
        </div>
    )
}

export default Card