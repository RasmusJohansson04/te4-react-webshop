import { Link } from 'react-router-dom'
import './Card.css'
import { useContext } from 'react'
import { CartContext } from '../context/cartContextProvider'

function Card(props) {
    let { id, name, price, quantity, categories } = props
    const { addToCart } = useContext(CartContext)
    return (
        <li>
            <div className="card-container">
                <Link className='nav-link' to={`/produkt/${id}`}>
                    <article className="card">
                        <div className="card-image">
                            <img src="/images/ruslan-bardash.jpg" alt="" />
                        </div>
                        <div className="card-text">
                            <h2>{name}</h2>
                            <p>{price}kr</p>
                        </div>
                    </article>
                </Link>
                <button onClick={() => { addToCart(props) }}>LÄGG TILL I VARUKORG</button>
            </div>
        </li>
    )
}

export default Card