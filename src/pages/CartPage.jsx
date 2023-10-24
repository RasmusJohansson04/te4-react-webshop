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
                        {cart.cart.length > 0 ? (
                            <>

                                {cart && cart.cart.map((item, index) => {
                                    return (
                                        <CartProduct key={index} id={item.id} name={item.name} price={item.price} quantity={item.quantity} categories={item.categories} />
                                    )
                                })}
                            </>
                        ) : (
                            <div className="center">
                                <p>Varukorgen är tom</p>
                            </div>
                        )}
                    </ul>
                    <button className="hover-button m-bottom">TILL KASSAN</button>
                </div>
            </main>
        </>
    )
}

export default CartPage