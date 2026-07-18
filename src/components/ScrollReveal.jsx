import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  animation = 'fade-up', // fade-up, fade-down, fade-left, fade-right, zoom-in, fade-in
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = '',
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseTransition = {
      transitionProperty: 'all',
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: 'cubic-bezier(0.21, 1.02, 0.43, 1.01)', // Custom elastic-like ease out
    };

    if (isIntersecting) {
      return {
        ...baseTransition,
        opacity: 1,
        transform: 'none',
      };
    }

    let transform = 'none';
    switch (animation) {
      case 'fade-up':
        transform = 'translateY(40px)';
        break;
      case 'fade-down':
        transform = 'translateY(-40px)';
        break;
      case 'fade-left':
        transform = 'translateX(40px)';
        break;
      case 'fade-right':
        transform = 'translateX(-40px)';
        break;
      case 'zoom-in':
        transform = 'scale(0.92)';
        break;
      case 'fade-in':
      default:
        transform = 'none';
        break;
    }

    return {
      ...baseTransition,
      opacity: 0,
      transform,
    };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
