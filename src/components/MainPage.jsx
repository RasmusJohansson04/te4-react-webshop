import { useEffect, useState } from 'react'
import Split from './Split'
import Card from './Card'
import './MainPage.css'

function MainPage() {
    const [data, setData] = useState([])

    async function fetchData() {
        await fetch(`http://localhost:3000/product?perPage=${10}`)
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
        <main id="main">
            <Split label={'HÖSTERBJUDANDEN'} />
            <div className="section slider">
                <div className="container">
                    <h1>POPULÄRT JUST NU</h1>
                    <ul className="horizontal-slide">
                        {data.map((product, index) => (
                            <Card key={index} id={product.id} name={product.name} price={product.price} quantity={product.quantity} categories={product.categories} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="section slider">
                <div className="container">
                    <h1>NYHETER</h1>
                    <ul className="horizontal-slide">
                        {data.map((product, index) => (
                            <Card key={index} id={product.id} name={product.name} price={product.price} quantity={product.quantity} categories={product.categories} />
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default MainPage