import './about.css';
import { motion } from 'framer-motion';
import animations from '@data/animations';
import GoldButton from '@components/goldbutton/goldbutton';
import serumImg from '@assets/images/HomePage/about-section/serum-img.jpg';
import faceMaskImg from '@assets/images/HomePage/about-section/face-mask-img.jpg';
import faceMaskImgMobile from '@assets/images/HomePage/about-section/faceMaskImg-mobile.png';
import useIsMobile from '@hooks/useIsMobile';
import routes from '@data/routes';
import useScrollTo from '@hooks/useScrollTo';

const About = () => {
  const isMobile = useIsMobile(1024);
  const { navigateScrollToTop } = useScrollTo();

  return (
    <section className="about-section position-relative">
      <div className="about-page-container d-flex">
        <div className="about-page-image-container">
          <img className="serumImg w-100" src={serumImg} alt="" />
          <picture>
            <source media="(max-width: 1000px)" srcSet={faceMaskImgMobile} />
            <img
              className="faceMaskImg position-absolute"
              src={faceMaskImg}
              alt=""
            />
          </picture>
          <div className="about-page-image-container-text">
            {isMobile && <h1 className="section-header">ABOUT ME</h1>}
            <motion.p
              className={isMobile ? 'text-center' : 'text-left'}
              variants={animations.fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Perfection in Every Detail
            </motion.p>
          </div>
        </div>
        <div className="about-page-text-container d-flex flex-column">
          {!isMobile && <h1 className="section-header mg-0">ABOUT ME</h1>}
          <div className="about-right-side-container">
            <p className="section-text mg-0">
              Discover more about my journey, professional expertise, and the
              passion that fuels my commitment to delivering exceptional
              services. Learn about my experience, dedication, and the values
              that shape my approach. Click to explore my story.
            </p>
            <div className="about-btn-container d-flex justify-content-center align-items-center">
              <motion.div
                className="d-inline-block"
                variants={animations.itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={animations.hover}
              >
                <GoldButton onClick={() => navigateScrollToTop(routes.about)}>
                  Get to Know Me
                </GoldButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
