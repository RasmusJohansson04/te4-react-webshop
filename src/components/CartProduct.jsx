import { Link } from 'react-router-dom'
import './CartProduct.css'
import { CartContext } from '../context/cartContextProvider'
import { useContext } from 'react'

function CartProduct(props) {
    let { id, name, price, quantity, categories } = props
    const { removeFromCart, increaseQuantity } = useContext(CartContext)

    return (
        <li>
            <div className="cart-product-container">
                <article className="cart-product">
                    <Link className='nav-link' to={`/produkt/${id}`}>
                        <div className="cart-product-info">
                            <div className="cart-product-image">
                                <img src="/images/ruslan-bardash.jpg" alt="" />
                            </div>
                            <div className="cart-product-text">
                                <h2>{name}</h2>
                                <p>{price}kr</p>
                            </div>
                        </div>
                    </Link>
                    <div className="cart-control">
                        <div className="cart-buttons">
                            <button><span className="material-symbols-outlined">remove</span></button>
                            <p>1</p>
                            <button><span className="material-symbols-outlined">add</span></button>
                            <button onClick={() => removeFromCart(props)}><span className="material-symbols-outlined">delete</span></button>
                        </div>
                    </div>
                </article>
            </div>
        </li>
    )
}

export default CartProduct