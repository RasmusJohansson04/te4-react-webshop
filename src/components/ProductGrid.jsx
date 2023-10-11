import Card from './Card'

function ProductGrid() {
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
    )
}

export default ProductGrid