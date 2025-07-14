// components/ScrollFadeIn.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Scroll.css';

const ScrollFadeIn = ({ children }) => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;
