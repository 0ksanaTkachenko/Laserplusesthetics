import './results.css';
import { motion } from 'framer-motion';
import animations from '@data/animations';
import ResultItem from '@components/resultItem/resultItem';
import results from '@data/results';
import useScrollTo from '@hooks/useScrollTo';
import routes from '@data/routes';
import useIsMobile from '@hooks/useIsMobile';

const Results = () => {
  const { navigateScrollToTop } = useScrollTo();
  const isMobile = useIsMobile(430);

  return (
    <div className="results-section d-flex align-items-center justify-content-between">
      <motion.div
        className="result-section-text d-flex flex-column justify-content-between align-items-center"
        variants={isMobile ? {} : animations.slideFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1>See the Real Results!</h1>
        <p className="text-center">
          Curious about how my treatments can transform your skin? You’ll find
          real before-and-after photos showcasing the visible improvements my
          clients have achieved. From smoother texture and reduced pigmentation
          to lifting and a natural glow—see the difference for yourself!
        </p>
        <button
          className="more-faq-link"
          onClick={() => navigateScrollToTop(routes.results)}
        >
          See Transformations
        </button>
      </motion.div>
      <motion.div
        className="example-result"
        variants={isMobile ? animations.fadeIn : animations.slideFromRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ResultItem result={results[19]} />
      </motion.div>
    </div>
  );
};

export default Results;
