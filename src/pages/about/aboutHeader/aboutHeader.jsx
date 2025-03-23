import './aboutHeader.css';
import AboutLeftWomen from '@assets/images/AboutPage/About-left-women.png';
import AboutRightWomen from '@assets/images/AboutPage/About-right-women.png';

const AboutHeader = () => {
  return (
    <div className="about-header-container w-100 d-flex justify-content-between">
      <div className="about-img-container">
        <picture>
          <img
            className="women-img h-100 img-fluid d-block"
            src={AboutLeftWomen}
            alt=""
          />
        </picture>
      </div>
      <div className="about-text-container d-flex flex-column justify-content-center align-items-center">
        <h3 className="about-header-title text-center">Laser Plus Esthetics</h3>
        <h3 className="about-header-description">About</h3>
      </div>
      <div className="women-right about-img-container">
        <picture>
          <img
            className="women-img h-100 img-fluid d-block"
            src={AboutRightWomen}
            alt=""
          />
        </picture>
      </div>
    </div>
  );
};

export default AboutHeader;
