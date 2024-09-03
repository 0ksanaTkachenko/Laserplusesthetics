import './aboutSection.css';
import GoldButton from '@components/GoldButton/GoldButton'
import serumImg from '@assets/images/about-section/serum-img.jpg';
import faceMaskImg from '@assets/images/about-section/face-mask-img.jpg';
import faceMaskImgMobile from '@assets/images/about-section/faceMaskImg-mobile.png';
import useIsMobile from '@hooks/useIsMobile'
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {

    const isMobile = useIsMobile();
    const goldBtnClassname = isMobile ? 'medium-goldBtn' : 'small-goldBtn'

    const navigate = useNavigate();

    const aboutBtnHandleClick = () => {
        navigate('/about');
    }

    return (
        <section className="about-section">
            <div className="about-page-container">
                <div className="about-page-image-container">
                    <img className="serumImg" src={serumImg} alt="" />
                    <picture>
                        <source media="(max-width: 700px)" srcSet={faceMaskImgMobile} /> 
                        <img className="faceMaskImg" src={faceMaskImg} alt="" />
                    </picture> 
                    <div className='about-page-image-container-text'>
                        {isMobile && <h1 className='section-header'>ABOUT ME</h1>}
                        <p>Perfection in Every Detail</p>
                    </div>
                </div>
                <div className="about-page-text-container">
                    {!isMobile && <h1 className='section-header'>ABOUT ME</h1>}
                    <div className="about-right-side-container">
                        <p className='section-text'>Find out more about my background, expertise, and what drives me to offer top-notch services. Click to explore my story.</p>
                        <div className='about-btn-container'>
                            <GoldButton onClick={aboutBtnHandleClick} className={goldBtnClassname}>Get to Know Me</GoldButton>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default AboutSection