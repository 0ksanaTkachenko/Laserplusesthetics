import './home.css';
import Appointment from './appointment/appointment';
import Strengths from './strengths/strengths';
import Services from './services/services';
import Faq from './faq/faq';
import About from './about/about';
import Top3Procedures from './top3Procedures/top3Procedures';

const HomePage = () => {

    return (
        <main>
            <div className="sections-container">
                <Appointment />
                <Strengths />
                <Services />
                <Faq />
                <About />
                <Top3Procedures />
            </div>
            
        </main>
    )
}

export default HomePage