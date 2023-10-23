import { Link } from 'react-router-dom'
import './Card.css'
import { useContext } from 'react'
import { CartContext } from '../context/cartContextProvider'

function Card(props) {
    let { id, name, price, quantity, categories } = props
    const { addToCart } = useContext(CartContext)
    console.log(categories[0])
    return (
        <li className="center-self">
            <div className="card-container">
                <Link className='nav-link' to={`/produkt/${id}`}>
                    <article className="card">
                        <div className="card-image">
                            <img src="/images/ruslan-bardash.jpg" alt="" />
                        </div>
                        <div className="card-text">
                            <h2>{name}</h2>
                            <p>{price}:-</p>
                            <p>{categories[0].categoryId}</p>
                        </div>
                    </article>
                </Link>
                <button onClick={() => { addToCart(props) }}>LÄGG TILL I VARUKORG</button>
            </div>
        </li>
    )
}

export default Card