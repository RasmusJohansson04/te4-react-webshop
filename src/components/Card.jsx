import { Link } from 'react-router-dom'
import './Card.css'

function Card(props) {
    let { id, label, price, quantity, categories } = props
    return (
        <li>
            <div className="card-container">
                <Link className='nav-link' to={`/produkt/${id}`}>
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
        </li>
    )
}

export default Card