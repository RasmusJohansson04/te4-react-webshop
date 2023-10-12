import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='nav-sticky' d="nav">
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
                        <li><Link className='nav-link' to={'/produkter'}>Produkter</Link></li>
                        <li><Link className='nav-link' to={'/varukorg'}>Varukorg</Link></li>
                        <li><a href="#footer">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar