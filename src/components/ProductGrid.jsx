import { useEffect, useState } from 'react'
import Card from './Card'

function ProductGrid() {
    const [data, setData] = useState([])
    const [perPage, setPerPage] = useState(20)

    function toggleCategories() {
        const menu = document.querySelector('.category-collapse')
        menu.classList.toggle('category-collapse--show')
    }

    async function fetchData() {
        await fetch(`http://localhost:3000/product?perPage=${perPage}`)
            .then(res => res.json())
            .then(result => {
                setData(result.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
    }, [perPage])

    function loadMoreContent() {
        setPerPage(perPage + 20)
    }

    return (
        <div className="container">
            <h1>VÅRA PRODUKTER</h1>
            <div className="category-select">
                <div className="category-special">
                    <button>ALLA PRODUKTER</button>
                    <button className="special">ERBJUDANDEN</button>
                </div>
                <button onClick={() => { toggleCategories() }} className="category-button">KATEGORIER</button>
                <div className="category-collapse">
                    <ul className="category-list">
                        <li><button>STOLAR</button></li>
                        <li><button>SOFFOR</button></li>
                        <li><button>BORD</button></li>
                        <li><button>HAMMOCK</button></li>
                        <li><button>PARASOLL</button></li>
                        <li><button>UTEKÖK</button></li>
                        <li><button>DYNOR</button></li>
                    </ul>
                </div>
            </div>
            <ul className="product-grid">
                {data.map((product, index) => (
                    <Card key={index} id={product.id} name={product.name} price={product.price} quantity={product.quantity} categories={product.categories} />
                ))}
            </ul>
            <div className="center">
                <button className='hover-button m-bottom' onClick={() => { loadMoreContent() }}>Visa Mer</button>
            </div>
        </div>
    )
}

export default ProductGrid