import Split from './Split'
import HorizontalSlide from './HorizontalSlide'
import './MainPage.css'

function MainPage() {
    return (
        <main id="main">
            <Split label={'HÖSTERBJUDANDEN'} />
            <HorizontalSlide label={'POPULÄRT JUST NU'} />
            <HorizontalSlide label={'NYHETER'} />
        </main>
    )
}

export default MainPage