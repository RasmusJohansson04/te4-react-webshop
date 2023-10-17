import { useEffect, useState } from 'react'
import Card from './Card'

function ProductGrid() {
    const [data, setData] = useState([])

    async function fetchData() {
        await fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(result => {
                setData(result.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container">
            <h1>VÅRA PRODUKTER</h1>
            <div className="category-select">
                <div className="category-special">
                    <button>ALLA PRODUKTER</button>
                    <button className="special">ERBJUDANDEN</button>
                </div>
                <button className="category-button">KATEGORIER</button>
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
                {data.map((product) => (
                    <Card key={product.id} label={product.name} price={product.price} quantity={product.quantity} categories={product.categories} />
                ))}
            </ul>
        </div>
    )
}

export default ProductGrid