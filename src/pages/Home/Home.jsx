import './home.css';
import Appointment from './appointment/appointment';

const HomePage = () => {

    return (
        <main>
            <div className="sections-container">
                <Appointment/>
                {/* <StrengthsSection />
                <ServicesSection />
                <FAQsection />
                <AboutSection />
                <Top3Procedures /> */}
            </div>
            
        </main>
    )
}

export default HomePage