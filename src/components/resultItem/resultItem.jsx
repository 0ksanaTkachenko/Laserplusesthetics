/* eslint-disable react/prop-types */
import './resultItem.css';
import ReactCompareImage from 'react-compare-image';
import { useState, useEffect } from 'react';

const ResultItem = ({ result }) => {
  const [sliderPosition, setSliderPosition] = useState(0.5);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  return (
    <div className="result-item d-flex flex-column justify-content-between h-auto position-relative">
      <h2 className="result-title text-center mx-auto">{result.title}</h2>
      <div
        className="compare-wrapper position-relative"
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <ReactCompareImage
          leftImage={result.beforeImage}
          rightImage={result.afterImage}
          sliderLineColor="#d6e3ea"
          handleSize={60}
          sliderPositionPercentage={sliderPosition}
          onSliderPositionChange={(position) => setSliderPosition(position)}
          handle={
            <div className="compare-handle d-flex align-items-center justify-content-center cursor-pointer">
              <div className="arrow-handle left-arrow"></div>
              <div className="arrow-handle right-arrow"></div>
            </div>
          }
        />
        {sliderPosition > 0.3 && (
          <div className="compare-label left-label">Before</div>
        )}
        {sliderPosition < 0.7 && (
          <div className="compare-label right-label">After</div>
        )}
      </div>
    </div>
  );
};

export default ResultItem;
