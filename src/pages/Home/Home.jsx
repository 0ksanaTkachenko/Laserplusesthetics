import './Home.css';
import AppointmentSection from "@pages/Home/HomeElements/appointmentSection/appointmentSection"
import StrengthsSection from "@pages/Home/HomeElements/strengthsSection/strengthsSection"
import ServicesSection from "@pages/Home/HomeElements/servicesSection/servicesSection"
import FAQsection from "@pages/Home/HomeElements/FAQsection/FAQsection"
import AboutSection from "@pages/Home/HomeElements/aboutSection/aboutSection"
import Top3Procedures from "@pages/Home/HomeElements/top3Procedures/top3Procedures"

const HomePage = () => {

    return (
        <main>
            <div className="sections-container">
                <AppointmentSection/>
                <StrengthsSection />
                <ServicesSection />
                <FAQsection />
                <AboutSection />
                <Top3Procedures />
            </div>
            
        </main>
    )
}

export default HomePage