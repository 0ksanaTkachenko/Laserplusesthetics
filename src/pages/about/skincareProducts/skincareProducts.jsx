import './skincareProducts.css';
import skincare from '@data/skincare';
import { motion } from 'framer-motion';
import animations from '@data/animations';

const SkincareCard = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const animationVariant = isEven
    ? animations.slideFromLeft
    : animations.slideFromRight;

  return (
    <motion.div
      variants={animationVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="skincare-card"
    >
      {data.type === 'feature' ? (
        <div className="feature-card-img h-50 overflow-hidden">
          <img src={data.img} className="w-100 h-100 object-fit-cover" alt="" />
        </div>
      ) : (
        <div
          className="overlay-container w-100 h-100 d-flex justify-content-center align-items-center position-relative"
          style={{ backgroundImage: `url(${data.img})` }}
        >
          <div className="skincare-title overlay-title position-absolute text-end">
            <div className="skincare-text">{data.title}</div>
          </div>
          <div className="skincare-description overlay-description">
            {data.description}
          </div>
        </div>
      )}
      {data.type === 'feature' && (
        <div className="feature-card-text h-50 d-flex flex-column justify-content-center align-items-end position-relative">
          <div className="skincare-title feature-title position-absolute text-end">
            <div className="skincare-text">{data.title}</div>
          </div>
          <div className="skincare-description">{data.description}</div>
        </div>
      )}
    </motion.div>
  );
};

const SkincareProducts = () => {
  return (
    <div className="skincare-section">
      <h3 className="skincare-header w-100 text-center">
        Skincare i work with:
      </h3>
      <div className="skincare-container d-flex flex-wrap h-100">
        {skincare.map((cardData, index) => (
          <SkincareCard index={index} key={cardData.title} data={cardData} />
        ))}
      </div>
    </div>
  );
};

export default SkincareProducts;
