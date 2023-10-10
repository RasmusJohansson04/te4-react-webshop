function HorizontalSlide(props) {
    let { label } = props
    return (
        <div className="section slider">
            <div className="container">
                <h1>{label}</h1>
                <ul className="horizontal-slide">
                    <li>
                        <a href="/item">
                            <article className="card">
                                <div className="card-image">
                                    <img src="/images/ruslan-bardash.jpg" alt="" />
                                </div>
                                <div className="card-text">
                                    <h2>Pall</h2>
                                    <p>3000kr</p>
                                </div>
                            </article>
                        </a>
                    </li>
                    <li>
                        <a href="/item">
                            <article className="card">
                                <div className="card-image">
                                    <img src="/images/sam-moghadam.jpg" alt="" />
                                </div>
                                <div className="card-text">
                                    <h2>Stol</h2>
                                    <p>3000kr</p>
                                </div>
                            </article>
                        </a>
                    </li>
                    <li>
                        <a href="/item">
                            <article className="card">
                                <div className="card-image">
                                    <img src="/images/ruslan-bardash.jpg" alt="" />
                                </div>
                                <div className="card-text">
                                    <h2>Pall</h2>
                                    <p>3000kr</p>
                                </div>
                            </article>
                        </a>
                    </li>
                    <li>
                        <a href="/item">
                            <article className="card">
                                <div className="card-image">
                                    <img src="/images/sam-moghadam.jpg" alt="" />
                                </div>
                                <div className="card-text">
                                    <h2>Stol</h2>
                                    <p>3000kr</p>
                                </div>
                            </article>
                        </a>
                    </li>
                    <li>
                        <a href="/item">
                            <article className="card">
                                <div className="card-image">
                                    <img src="/images/ruslan-bardash.jpg" alt="" />
                                </div>
                                <div className="card-text">
                                    <h2>Pall</h2>
                                    <p>3000kr</p>
                                </div>
                            </article>
                        </a>
                    </li>
                    <li>
                        <a href="/item">
                            <article className="card">
                                <div className="card-image">
                                    <img src="/images/sam-moghadam.jpg" alt="" />
                                </div>
                                <div className="card-text">
                                    <h2>Stol</h2>
                                    <p>3000kr</p>
                                </div>
                            </article>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HorizontalSlide