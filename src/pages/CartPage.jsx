import './CartPage.css'
import Navbar from '../components/Navbar'

function CartPage() {
    return (
        <>
            <Navbar />
            <main>
                <div className="container">
                    <h1>VARUKORG</h1>
                    <ul>
                        <li>
                            <div className="product">
                                <div className="product-image">
                                    <img src="/images/ruslan-bardash.jpg" alt="" />
                                </div>
                                <div className="product-text">
                                    <h2>PALL</h2>
                                    <h3>3000kr</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="cart-buttons">
                                    <button><span className="material-symbols-outlined">remove</span></button>
                                    <p>1</p>
                                    <button><span className="material-symbols-outlined">add</span></button>
                                    <button><span className="material-symbols-outlined">delete</span></button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <div className="product-image">
                                    <img src="/images/ruslan-bardash.jpg" alt="" />
                                </div>
                                <div className="product-text">
                                    <h2>PALL</h2>
                                    <h3>3000kr</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="cart-buttons">
                                    <button><span className="material-symbols-outlined">remove</span></button>
                                    <p>1</p>
                                    <button><span className="material-symbols-outlined">add</span></button>
                                    <button><span className="material-symbols-outlined">delete</span></button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button className="checkout">TILL KASSAN</button>
                </div>
            </main>
        </>
    )
}

export default CartPage