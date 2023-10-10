import { Link } from 'react-router-dom'
import './NavbarFixed.css'

function NavbarFixed() {
    return (
        <nav id="nav">
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
                <button className="nav-button"><span className="material-symbols-outlined">menu</span></button>
                <div className="nav-collapse">
                    <ul className="nav-list">
                        <li><a href="/products">Produkter</a></li>
                        <li><a href="/cart">Varukorg</a></li>
                        <li><a href="#footer">Kontakt</a></li>
                    </ul>
                </div>
            </div>
            <script src="/js/menu.js"></script>
        </nav>
    )
}

export default NavbarFixed