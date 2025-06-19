import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we should scroll to top
    const shouldScrollToTop = sessionStorage.getItem('scrollToTop');
    
    if (shouldScrollToTop === 'true') {
      // Clear the flag
      sessionStorage.removeItem('scrollToTop');
      
      // Scroll to top with a small delay to ensure the page has rendered
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [location.pathname]);
}; 