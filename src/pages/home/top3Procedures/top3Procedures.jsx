import './top3Procedures.css';
import SectionHeader from '../../../components/sectionHeader/sectionHeader';
import CenterMode from './carousel/carousel';

const Top3Procedures = () => {

    return (
        <section className="top3Procedures-section">
            <SectionHeader
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