import './ProductPage.css'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

function ProductPage() {
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
                            <h2>Pall</h2>
                            <div className="rating">
                                <span className="material-symbols-outlined checked">star</span>
                                <span className="material-symbols-outlined checked">star</span>
                                <span className="material-symbols-outlined checked">star</span>
                                <span className="material-symbols-outlined checked">star</span>
                                <span className="material-symbols-outlined">star</span>
                            </div>
                            <h3>3000kr</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, mollitia accusamus ab nobis ex
                                natus magnam nemo, praesentium eos delectus asperiores quasi fugit corporis tenetur! Placeat
                                quae eum aliquid quidem?</p>
                            <button>LÄGG TILL I VARUKORG</button>
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

                            <li>
                                <Card label={'Pall'} price={'3000'} />
                            </li>

                            <li>
                                <Card label={'Pall'} price={'3000'} />
                            </li>

                            <li>
                                <Card label={'Pall'} price={'3000'} />
                            </li>

                            <li>
                                <Card label={'Pall'} price={'3000'} />
                            </li>

                            <li>
                                <Card label={'Pall'} price={'3000'} />
                            </li>

                            <li>
                                <Card label={'Pall'} price={'3000'} />
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductPage