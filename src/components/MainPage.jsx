import Split from './Split'
import Card from './Card'
import './MainPage.css'

function MainPage() {
    return (
        <main id="main">
            <Split label={'HÖSTERBJUDANDEN'} />
            <div className="section slider">
                <div className="container">
                    <h1>POPULÄRT JUST NU</h1>
                    <ul className="horizontal-slide">
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section slider">
                <div className="container">
                    <h1>NYHETER</h1>
                    <ul className="horizontal-slide">
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                        <li>
                            <Card name={'Pall'} price={'3000'} />
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default MainPage