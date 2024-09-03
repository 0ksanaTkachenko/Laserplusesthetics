import './top3Procedures.css';
import WhiteBgSectionHeader from '@components/WhiteBgSectionHeader/WhiteBgSectionHeader'
import CenterMode from '@pages/Home/HomeElements/top3Procedures/Carousel/Carousel';

const Top3Procedures = () => {

    return (
        <section className="top3Procedures-section">
            <WhiteBgSectionHeader
                p={'OUR TOP 3'}
                h2={'Popular procedures'}
            />
            <div className='top3Procedures-slider'>
            <CenterMode />
            </div>
        </section>
    )
}

export default Top3Procedures