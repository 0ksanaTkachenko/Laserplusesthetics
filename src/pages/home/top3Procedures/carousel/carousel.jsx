import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import FacialRejuvenation from "@assets/images/HomePage/slick-carousel/FacialRejuvenation.jpg";
import FacialRejuvenationMobile from "@assets/images/HomePage/slick-carousel/FacialRejuvenation-mobile.png";
import microneedling from "@assets/images/HomePage/slick-carousel/microneedling.jpg";
import MicroneedlingMobile from "@assets/images/HomePage/slick-carousel/Microneedling-mobile.png";
import laserHairRemoval from "@assets/images/HomePage/slick-carousel/LaserHairRemoval.jpg";
import LaserHairRemovalMobile from "@assets/images/HomePage/slick-carousel/LaserHairRemoval-mobile.png";
import useIsMobile from "@hooks/useIsMobile";

const CenterMode = () => {
    const [isMobile, setIsMobile] = useState(useIsMobile(700));

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log("isMobile:", isMobile);

    const desktopSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true,
        arrows: true
    };

    const mobileSettings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settings = isMobile ? mobileSettings : desktopSettings;

    const slides = [
        { img: FacialRejuvenation, mobileImg: FacialRejuvenationMobile, text: "Facial Rejuvenation" },
        { img: microneedling, mobileImg: MicroneedlingMobile, text: "Microneedling" },
        { img: laserHairRemoval, mobileImg: LaserHairRemovalMobile, text: "Laser Hair Removal" },
        { img: FacialRejuvenation, mobileImg: FacialRejuvenationMobile, text: "Facial Rejuvenation" },
        { img: microneedling, mobileImg: MicroneedlingMobile, text: "Microneedling" },
        { img: laserHairRemoval, mobileImg: LaserHairRemovalMobile, text: "Laser Hair Removal" }
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div className="slide-container" key={index}>
                        <picture>
                            <source media="(max-width: 700px)" srcSet={slide.mobileImg} />
                            <img src={slide.img} alt={slide.text} />
                        </picture>
                        <div className="slide-text-container">
                            <div className="slide-text">{slide.text}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CenterMode;