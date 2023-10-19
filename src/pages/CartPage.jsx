import './CartPage.css'
import Navbar from '../components/Navbar'
import { CartContext } from '../context/cartContextProvider'
import { useContext } from 'react'
import CartProduct from '../components/CartProduct'

function CartPage() {
    const cart = useContext(CartContext)
    console.log(cart.cart)
    return (
        <>
            <Navbar />
            <main>
                <div className="container">
                    <h1>VARUKORG</h1>
                    <ul>
                        {cart && cart.cart.map((item, index) => {
                            return (
                                <CartProduct key={index} id={item.id} label={item.name} price={item.price} quantity={item.quantity} categories={item.categories} />
                            )
                        })}
                    </ul>
                    <button className="checkout">TILL KASSAN</button>
                </div>
            </main>
        </>
    )
}

export default CartPage