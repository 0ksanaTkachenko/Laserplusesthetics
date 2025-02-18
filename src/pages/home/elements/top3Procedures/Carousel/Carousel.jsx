// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import FacialRejuvenation from '@assets/images/HomePage/slick-carousel/FacialRejuvenation.jpg';
import FacialRejuvenationMobile from '@assets/images/HomePage/slick-carousel/FacialRejuvenation-mobile.png';
import microneedling from '@assets/images/HomePage/slick-carousel/microneedling.jpg';
import MicroneedlingMobile from '@assets/images/HomePage/slick-carousel/Microneedling-mobile.png';
import laserHairRemoval from '@assets/images/HomePage/slick-carousel/LaserHairRemoval.jpg';
import LaserHairRemovalMobile from '@assets/images/HomePage/slick-carousel/LaserHairRemoval-mobile.png';
import useIsMobile from '@hooks/useIsMobile'

function CenterMode() {

    const isMobile = useIsMobile();

    const decktopSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true,
        arrows: true
    };

    const laptopSettings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

    const settings = isMobile ? laptopSettings : decktopSettings;

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide-container">
                    <picture>
                        <source media="(max-width: 700px)" srcSet={FacialRejuvenationMobile} />
                        <img src={FacialRejuvenation} alt="Facial Rejuvenation" />
                    </picture>
                    <div className="slide-text-container">
                        <div className="slide-text">Facial Rejuvenation</div>
                    </div>
                </div>
                <div className="slide-container">
                    <picture>
                        <source media="(max-width: 700px)" srcSet={MicroneedlingMobile} />
                        <img src={microneedling} alt="Microneedling" />
                    </picture>
                    <div className="slide-text-container">
                        <div className="slide-text">Microneedling</div>
                    </div>
                </div>
                <div className="slide-container">
                     <picture>
                        <source media="(max-width: 700px)" srcSet={LaserHairRemovalMobile} />
                        <img src={laserHairRemoval} alt="Laser Hair Removal" />
                    </picture>
                    <div className="slide-text-container">
                        <div className="slide-text">Laser Hair Removal</div>
                    </div>
                </div>
                <div className="slide-container">
                    <picture>
                        <source media="(max-width: 700px)" srcSet={FacialRejuvenationMobile} />
                        <img src={FacialRejuvenation} alt="Facial Rejuvenation" />
                    </picture>
                    <div className="slide-text-container">
                        <div className="slide-text">Facial Rejuvenation</div>
                    </div>
                </div>
                <div className="slide-container">
                    <picture>
                        <source media="(max-width: 700px)" srcSet={MicroneedlingMobile} />
                        <img src={microneedling} alt="Microneedling" />
                    </picture>
                    <div className="slide-text-container">
                        <div className="slide-text">Microneedling</div>
                    </div>
                </div>
                <div className="slide-container">
                    <picture>
                        <source media="(max-width: 700px)" srcSet={LaserHairRemovalMobile} />
                        <img src={laserHairRemoval} alt="Laser Hair Removal" />
                    </picture>
                    <div className="slide-text-container">
                        <div className="slide-text">Laser Hair Removal</div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default CenterMode;
