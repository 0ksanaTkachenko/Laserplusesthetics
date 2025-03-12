/* eslint-disable no-unused-vars */
import './services.css';
import GoldButton from '@components/goldbutton/goldbutton';
import servicesImg from '@assets/images/HomePage/services-section/services-img.jpg';
import servicesLaptopImg from '@assets/images/HomePage/services-section/services-laptop-img.jpg';
import servicesMobileImg from '@assets/images/HomePage/services-section/services-mobile-img.jpg';
import useIsMobile from '@hooks/useIsMobile';
import useScrollTo from '../../../hooks/useScrollTo';
import routes from '../../../data/routes';

const Services = () => {
  const isMobile = useIsMobile(1024);
  const { navigateScrollToTop } = useScrollTo();

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-img-container">
          <picture>
            <source media="(max-width: 600px)" srcSet={servicesMobileImg} />
            <source media="(max-width: 890px)" srcSet={servicesLaptopImg} />
            <img className="services-img img-fluid" src={servicesImg} alt="" />
          </picture>
          {isMobile && (
            <h1 className="section-header">
              Your health and beauty are in good hands
            </h1>
          )}
        </div>
        <div className="services-text-container">
          {!isMobile && (
            <h1 className="section-header">
              Your health and beauty are in good hands
            </h1>
          )}
          <p className="section-text">
            I focus on providing exceptional service and personalized care. My
            goal is to ensure your well-being and comfort, offering the best in
            beauty treatments.
          </p>
          <div className="services-bnt-container">
            <GoldButton
              onClick={() => navigateScrollToTop(routes.services)}
              className={'medium-goldBtn'}
            >
              Wiew services
            </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
