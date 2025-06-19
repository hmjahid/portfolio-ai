import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/blog') {
      const shouldScrollToTop = sessionStorage.getItem('scrollToTop');
      if (shouldScrollToTop === 'true') {
        sessionStorage.removeItem('scrollToTop');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    // Default: instant scroll for all other pages
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 