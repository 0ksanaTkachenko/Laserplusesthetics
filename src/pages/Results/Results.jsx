/* eslint-disable react/prop-types */
import ReactCompareImage from 'react-compare-image';
import results from '../../data/results';
import './results.css';
import headerImg from '@assets/images/resultsPage/header-img.png';
import servicesHeaderLeft from '@assets/images/resultsPage/services-header-left.png';
import servicesHeaderRight from '@assets/images/resultsPage/services-header-right.png';
import servicesHighlight from '@assets/images/resultsPage/services-highlight.png';
import bookNowBtn from '@assets/images/resultsPage/book-now-btn.png';
import { useState } from 'react';
import ModalAppointment from '@components/modalAppointment/modalAppointment';

const ResultItem = ({ result }) => {
  return (
    <div className="result-item d-flex flex-column justify-content-between h-auto">
      <h2 className="result-title text-center mx-auto">{result.title}</h2>
      <ReactCompareImage
        leftImage={result.beforeImage}
        rightImage={result.afterImage}
        sliderLineColor="#d6e3ea"
        handleSize={60}
        handle={
          <div className="compare-handle d-flex align-items-center justify-content-center cursor-pointer">
            <div className="arrow-handle left-arrow"></div>
            <div className="arrow-handle right-arrow"></div>
          </div>
        }
      />
    </div>
  );
};

const Results = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="results d-flex flex-column">
      <div className="results-header-container d-flex position-relative">
        <div className="results-background left-background w-50 d-flex justify-content-center position-relative">
          <h1>Before</h1>
          <img
            src={servicesHeaderLeft}
            className="img-fluid position-absolute w-100 h-auto bottom-0"
            alt=""
          />
        </div>
        <div className="results-background right-background w-50 d-flex justify-content-center position-relative">
          <h1>After</h1>
          <img
            src={servicesHeaderRight}
            className="img-fluid img-fluid position-absolute w-100 h-auto bottom-0"
            alt=""
          />
        </div>
        <img
          src={headerImg}
          className="results-header-img img-fluid position-absolute start-50 translate-middle-x h-100"
          alt=""
        />
      </div>
      <div className="results-main">
        <div className="results-highlight d-flex flex-column justify-content-center align-items-center text-center position-relative">
          <h1>Real Results from My Clients </h1>
          <p>
            Discover the transformative power of my treatments at Laser Plus
            Esthetics! This page showcases real results from my clients — from
            smoother skin texture and reduced pigmentation to lifted features
            and a natural, healthy glow. Whether it’s rejuvenating facials, acne
            and pigmentation treatments, or the visible effects of peels and
            lymphatic drainage, each transformation reflects my personalized
            approach to skincare.
          </p>
          <img
            src={servicesHighlight}
            className="results-highlight-img img-fluid position-absolute"
            alt=""
          />
        </div>
        <div className="results-container d-flex flex-wrap mx-auto">
          {results.map((result) => (
            <ResultItem key={result.id} result={result} />
          ))}
        </div>
      </div>

      <div className="results-footer d-flex justify-content-center align-items-center flex-column w-100">
        <p className="text-center">
          Healthy skin is an investment in your confidence and beauty.
        </p>
        <h1 className="text-center">
          Ready for your own “before & after” moment?
        </h1>
        <img
          src={bookNowBtn}
          className="book-now-btn h-auto"
          alt=""
          onClick={() => setIsModalOpen(true)}
        />
        <ModalAppointment
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Results;
