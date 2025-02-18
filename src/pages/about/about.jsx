import './about.css';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHeader from './aboutHeader/aboutHeader';
import MyStory from './myStory/myStory';
import Safety from './safety/safety';
import Faq from './faq/faq';


const AboutPage = () => {
    const faqRef = useRef(null);
    const headerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#faq' && faqRef.current) {
            faqRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (location.hash === '#about-header' && headerRef.current) {
            headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [location]);

    return (
        <div className='aboutPage'>
            <div ref={headerRef}>
                <AboutHeader />
            </div>
            <MyStory />
            <Safety />
            <div ref={faqRef}>
                <Faq />
            </div>
        </div>
    );
}

export default AboutPage;