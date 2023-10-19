function Split(props) {
    let { name } = props
    return (
        <div className="section">
            <div className="container">
                <h1>{name}</h1>
                <div className="split">
                    <div className="split-image">
                        <img src="/images/ruslan-bardash.jpg" alt="" />
                    </div>
                    <div className="split-text">
                        <h2>Text</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, mollitia accusamus ab nobis ex
                            natus magnam nemo, praesentium eos delectus asperiores quasi fugit corporis tenetur! Placeat
                            quae eum aliquid quidem?</p>
                        <button className="hover-button">TILL ERBJUDANDET</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Split