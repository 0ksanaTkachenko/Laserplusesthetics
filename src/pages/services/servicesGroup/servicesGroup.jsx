/* eslint-disable react/prop-types */
import './servicesGroup.css';
import useIsMobile from '@hooks/useIsMobile';
import { motion } from 'framer-motion';
import animations from '@data/animations';

const ServiceItem = ({
  service,
  isMobile,
  setClickedСategory,
  subServicesRef,
}) => {
  const isEven = service.id % 2 === 0;

  const handleClick = () => {
    setClickedСategory(service.category);
    if (subServicesRef.current) {
      subServicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servImg = (
    <div className="services-item-img">
      <img
        src={service.img}
        className="img-fluid w-100 h-100"
        alt={service.category}
      />
    </div>
  );

  return (
    <div className="services-item d-flex text-center mx-auto">
      {(isMobile || !isEven) && servImg}
      <div
        className={`services-text d-flex flex-column justify-content-center align-items-center text-center ${isEven ? 'text-left' : 'text-right'}`}
      >
        <div className="service-text-container">
          <h3>{service.category}</h3>
          <p>{service.description}</p>
        </div>
        <motion.button
          onClick={handleClick}
          className="view-more-btn border-0 cursor-pointer"
          variants={animations.itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ backgroundColor: '#087ca0', color: '#fff' }}
          transition={{ duration: 0.3 }}
        >
          View more
        </motion.button>
      </div>
      {!isMobile && isEven && servImg}
    </div>
  );
};

const ServicesGroup = ({ services, setClickedСategory, subServicesRef }) => {
  const isMobile = useIsMobile(760);
  return (
    <div className="services-list-container d-flex flex-column">
      {services.map((service) => (
        <ServiceItem
          subServicesRef={subServicesRef}
          key={service.id}
          service={service}
          isMobile={isMobile}
          setClickedСategory={setClickedСategory}
        />
      ))}
    </div>
  );
};

export default ServicesGroup;
