import certificates from '@data/certificates';
import Slider from 'react-slick';

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-next" onClick={onClick} />;
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-prev" onClick={onClick} />;
};

const CertificateCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="certificate-carousel-container container mt-4">
      <Slider {...settings}>
        {certificates.map((cert, index) => (
          <div key={index} className="px-2">
            <div className="card text-center p-3 shadow-sm">
              <img src={cert.image} className="card-img-top" alt={cert.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Education = () => {
  return (
    <div className="education">
      <CertificateCarousel />
    </div>
  );
};

export default Education;
