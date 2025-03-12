import './about.css';
import GoldButton from '@components/goldbutton/goldbutton';
import serumImg from '@assets/images/HomePage/about-section/serum-img.jpg';
import faceMaskImg from '@assets/images/HomePage/about-section/face-mask-img.jpg';
import faceMaskImgMobile from '@assets/images/HomePage/about-section/faceMaskImg-mobile.png';
import useIsMobile from '@hooks/useIsMobile';
import routes from '../../../data/routes';
import useScrollTo from '../../../hooks/useScrollTo';

const About = () => {
  const isMobile = useIsMobile(1024);
  const { navigateScrollToTop } = useScrollTo();

  return (
    <section className="about-section">
      <div className="about-page-container">
        <div className="about-page-image-container">
          <img className="serumImg" src={serumImg} alt="" />
          <picture>
            <source media="(max-width: 1000px)" srcSet={faceMaskImgMobile} />
            <img className="faceMaskImg" src={faceMaskImg} alt="" />
          </picture>
          <div className="about-page-image-container-text">
            {isMobile && <h1 className="section-header">ABOUT ME</h1>}
            <p>Perfection in Every Detail</p>
          </div>
        </div>
        <div className="about-page-text-container">
          {!isMobile && <h1 className="section-header">ABOUT ME</h1>}
          <div className="about-right-side-container">
            <p className="section-text">
              Discover more about my journey, professional expertise, and the
              passion that fuels my commitment to delivering exceptional
              services. Learn about my experience, dedication, and the values
              that shape my approach. Click to explore my story.
            </p>
            <div className="about-btn-container">
              <GoldButton onClick={() => navigateScrollToTop(routes.about)}>
                Get to Know Me
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
