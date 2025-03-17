import './myStory.css';
import { motion } from 'framer-motion';
import animations from '@data/animations';
// import Education from './education';
import leafImg from '@assets/images/AboutPage/leaf.png';
import photo from '@assets/images/AboutPage/woman-spa-skin-treatment.jpg';

const MyStory = () => {
  return (
    <div className="my-story-container d-flex flex-column">
      <div className="my-story-approach text-center position-relative mx-auto">
        <motion.div
          variants={animations.slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={leafImg}
            alt=""
            className="leaf-img img-fluid position-absolute h-auto"
          />
        </motion.div>
        <motion.div
          variants={animations.slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            For me, cosmetology is the path to healthy, radiant skin and inner
            harmony. I help reveal natural beauty by combining science, care,
            and a personalized approach. ✨
          </p>
        </motion.div>
      </div>
      <div className="about-me d-flex align-items-stretch w-100">
        <div className="about-me-text-container d-flex flex-column justify-content-center">
          <motion.h3
            className="about-me-title"
            variants={animations.fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Hi, I’m Tanya!
          </motion.h3>
          <p className="about-me-text">
            I am a certified cosmetologist with over 10 years of experience. I
            specialize in modern skincare techniques, continuously upgrading my
            skills and following the latest trends. For me, cosmetology is both
            an art and a science—caring for the skin and overall well-being. I
            use only proven methods and high-quality products, tailoring
            treatments to each client’s unique needs. Healthy, radiant skin
            starts with the right care. Let’s achieve it together!
          </p>
        </div>
        <div className="about-me-image-container d-flex align-items-center justify-content-center">
          <div className="about-me-image position-relative overflow-hidden text-center">
            <img
              src={photo}
              className="img-fluid w-100 h-100 object-fit-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <Education /> */}
    </div>
  );
};

export default MyStory;
