/* eslint-disable react/prop-types */
import './AboutHeader.css';
import AboutLeftWomen from '@assets/images/AboutPage/AboutHeader/About-left-women.png';
import AboutRightWomen from '@assets/images/AboutPage/AboutHeader/About-right-women.png';

const AboutHeader = () => {
    return (
        <div className='about-header-container'>
            <div className='about-img-container about-img-container-left'>
                <picture>
                    <img className={"women-img"} src={AboutLeftWomen} alt="" />
                </picture>
            </div>
            <div className='about-text-container'>
                <p>Laser Plus Esthetics</p>
                <p className='section-header'>About US</p>
            </div>
            <div className='about-img-container about-img-container-right'>
                <picture>
                    <img className={"women-img"} src={AboutRightWomen} alt="" />
                </picture>
            </div>
        </div>

    )
   
   
}

export default AboutHeader;