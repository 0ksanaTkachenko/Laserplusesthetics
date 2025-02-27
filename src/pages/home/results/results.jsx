import './results.css';
import ResultItem from '../../../components/resultItem/resultItem';
import results from '../../../data/results';
import useScrollTo from '../../../hooks/useScrollTo';
import routes from '../../../data/routes';

const Results = () => {
  const { navigateScrollToTop } = useScrollTo();

  return (
    <div className="results-section">
      <div className="result-section-text">
        <h1>See the Real Results!</h1>
        <p>
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
      </div>
      <div className="example-result">
        <ResultItem result={results[19]} />
      </div>
    </div>
  );
};

export default Results;
