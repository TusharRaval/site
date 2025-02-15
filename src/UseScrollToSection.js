import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UseScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
};

export default UseScrollToSection;
