import { Link } from 'react-router-dom'
import './Navbar.css'
import { CartContext } from '../context/cartContextProvider'
import { useContext } from 'react'

function Navbar() {
    function toggleMenu() {
        const menu = document.querySelector('.nav-collapse')
        menu.classList.toggle('nav-collapse--show')
    }
    const cart = useContext(CartContext)
    return (
        <nav className='nav-sticky' id="nav">
            <div className="navbar container">
                <header>
                    <a href="/">
                        <div className="img-container">
                            <img id="desktop" src="/images/outsite.png" alt="" />
                            <img id="mobile" src="/images/icon.png" alt="" />
                        </div>
                    </a>
                </header>
                <div className="nav-input">
                    <input type="text" placeholder="Sök..." />
                    <button><span className="material-symbols-outlined">search</span></button>
                </div>
                <button className="nav-button" onClick={() => { toggleMenu() }} ><span className="material-symbols-outlined">menu</span></button>
                <div className="nav-collapse">
                    <ul className="nav-list">
                        <li><Link className='nav-link' to={'/produkter'}>Produkter</Link></li>
                        <li><Link id='cart' className='nav-link' to={'/varukorg'}>Varukorg
                            <span className='cart-size'>{cart.cart.length !== 0 ? cart.cart.length : ''}</span></Link></li>
                        <li><a href="#footer">Kontakt</a></li>
                        <li><Link className='nav-link' to={'/profil'}>Profil</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar