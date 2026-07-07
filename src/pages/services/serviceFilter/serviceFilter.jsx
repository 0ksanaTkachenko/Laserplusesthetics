import './serviceFilter.css';
import services from '@data/services';
import useIsMobile from '@hooks/useIsMobile';
import { useEffect, useState, useMemo, useCallback } from 'react';
import ServicesModal from '../serviceModal/serviceModal';
import { motion } from 'framer-motion';
import animations from '@data/animations';

const ServicesItem = ({ subService }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = useCallback(() => setShowModal(true), []);
  const handleClose = useCallback(() => setShowModal(false), []);

  return (
    <>
      <motion.div
        className="sub-services d-flex flex-column"
        onClick={handleShow}
        initial={{ boxShadow: 'none' }}
        whileHover={animations.hoverInnerShadow}
      >
        <div className="sub-services-name">{subService.name}</div>
      </motion.div>
      <ServicesModal
        show={showModal}
        handleClose={handleClose}
        subService={subService}
      />
    </>
  );
};

const ServiceFilter = ({ clickedСategory, subServicesRef }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile(1024);

  useEffect(() => {
    setActiveCategory(clickedСategory ?? 'All');
  }, [clickedСategory]);

  const categories = useMemo(
    () => ['All', ...services.map((service) => service.category)],
    []
  );

  const filteredServices = useMemo(
    () =>
      activeCategory === 'All'
        ? services
        : services.filter((service) => service.category === activeCategory),
    [activeCategory]
  );

  const displayedServices = useMemo(() => {
    const flatServices = filteredServices.flatMap(
      (service) => service.services
    );
    return showAll ? flatServices : flatServices.slice(0, isMobile ? 2 : 3);
  }, [filteredServices, showAll, isMobile]);

  const hasMoreServices = useMemo(
    () =>
      filteredServices.flatMap((service) => service.services).length >
      (isMobile ? 2 : 3),
    [filteredServices, isMobile]
  );

  return (
    <div className="service-filter text-center" ref={subServicesRef}>
      <h3>Choose the care that enhances your beauty</h3>
      <div className="category-tags d-flex flex-wrap">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`tag border-0 ${activeCategory === category ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(category);
              setShowAll(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="services-list">
        <div className="sub-services-container">
          {displayedServices.map((subService, idx) => (
            <ServicesItem key={idx} subService={subService} />
          ))}
        </div>
      </div>
      {hasMoreServices && (
        <div className="show-more-container w-100">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="show-more-btn cursor-pointer border-0 bg-transparent mx-auto justify-content-center d-flex align-items-center"
          >
            {showAll ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L8 12L15 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <span className="btn-text">
              {showAll ? 'Show Less' : 'Show More'}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceFilter;
