import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollTo = () => {
  const navigate = useNavigate();
  const navigateScrollToTop = useCallback(
    (path) => {
      const originalScrollBehavior =
        document.documentElement.style.scrollBehavior;

      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      navigate(path, { replace: true });

      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      }, 10);
    },
    [navigate]
  );

  const navigateScrollToSection = useCallback(
    (path, id) => {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    },
    [navigate]
  );

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return { navigateScrollToTop, navigateScrollToSection, scrollToSection };
};

export default useScrollTo;
