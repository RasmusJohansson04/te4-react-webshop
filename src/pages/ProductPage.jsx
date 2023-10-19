import './ProductPage.css'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContextProvider'

function ProductPage() {
    const [data, setData] = useState([])
    const [moreData, setMoreData] = useState([])
    const { id } = useParams()
    const { addToCart } = useContext(CartContext)

    async function fetchData() {
        await fetch(`http://localhost:3000/product/${id}`)
            .then(res => res.json())
            .then(result => {
                setData(result.data)
                fetch(`http://localhost:3000/product/category/${result.data.categories[0].categoryId}`)
                    .then(res => res.json())
                    .then(result => {
                        setMoreData(result.data)
                    }).catch(err => {
                        console.log(err)
                    })
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <div className="container item">
                    <div className="split">
                        <div className="split-image">
                            <img src="/images/ruslan-bardash.jpg" alt="" />
                        </div>
                        <div className="split-text item-info">
                            <h2>{data.name}</h2>
                            <div className="rating">
                                <span className="material-symbols-outlined checked">star</span>
                                <span className="material-symbols-outlined checked">star</span>
                                <span className="material-symbols-outlined checked">star</span>
                                <span className="material-symbols-outlined checked">star</span>
                                <span className="material-symbols-outlined">star</span>
                            </div>
                            <h3>{data.price}kr</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, mollitia accusamus ab nobis ex
                                natus magnam nemo, praesentium eos delectus asperiores quasi fugit corporis tenetur! Placeat
                                quae eum aliquid quidem?</p>
                            <button onClick={() => { addToCart(data) }}>LÄGG TILL I VARUKORG</button>
                        </div>
                    </div>
                    <h1>PRODUKTINFORMATION</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nam exercitationem cum harum ipsa
                        rerum optio, porro ratione omnis praesentium quaerat ut doloremque. Quibusdam provident, impedit eaque
                        sint quaerat repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque
                        consequuntur adipisci ipsa commodi explicabo repellendus eum quos asperiores quas. Veniam delectus
                        illum, accusantium libero quis maxime voluptatum ullam alias!</p>
                    <div className="comments">
                        <h1>RECENSIONER</h1>
                        <ul>
                            <li>
                                <div className="comment">
                                    <h2>Sten</h2>
                                    <div className="rating">
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt consectetur ullam
                                        necessitatibus magni, nesciunt velit ad ipsam consequatur illum beatae, sapiente,
                                        dignissimos nulla in dicta ratione veritatis laudantium unde eaque.</p>
                                </div>
                            </li>
                            <li>
                                <div className="comment">
                                    <h2>Ingmar</h2>
                                    <div className="rating">
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt consectetur ullam
                                        necessitatibus magni, nesciunt velit ad ipsam consequatur illum beatae, sapiente,
                                        dignissimos nulla in dicta ratione veritatis laudantium unde eaque.</p>
                                </div>
                            </li>
                            <li>
                                <div className="comment">
                                    <h2>Sten</h2>
                                    <div className="rating">
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined checked">star</span>
                                        <span className="material-symbols-outlined checked">star</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt consectetur ullam
                                        necessitatibus magni, nesciunt velit ad ipsam consequatur illum beatae, sapiente,
                                        dignissimos nulla in dicta ratione veritatis laudantium unde eaque.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="slider">
                        <h1>LIKNANDE PRODUKTER</h1>
                        <ul className="horizontal-slide">
                            {moreData.map((product, index) => (
                                <Card key={index} id={product.id} label={product.name} price={product.price} quantity={product.quantity} categories={product.categories} />
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductPage