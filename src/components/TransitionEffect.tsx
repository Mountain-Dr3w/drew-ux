
import React, { useEffect, useRef } from 'react';

interface TransitionEffectProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
  distance?: number;
}

const TransitionEffect: React.FC<TransitionEffectProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
  className = '',
  threshold = 0.1,
  distance = 20,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay * 1000);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('animated');
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, once, threshold]);

  let transformInitial = '';
  switch (direction) {
    case 'up':
      transformInitial = `translateY(${distance}px)`;
      break;
    case 'down':
      transformInitial = `translateY(-${distance}px)`;
      break;
    case 'left':
      transformInitial = `translateX(${distance}px)`;
      break;
    case 'right':
      transformInitial = `translateX(-${distance}px)`;
      break;
    case 'scale':
      transformInitial = 'scale(0.95)';
      break;
    case 'fade':
      transformInitial = 'none';
      break;
  }

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={{
        transform: transformInitial,
        opacity: 0,
        transition: `opacity ${duration}s ease, transform ${duration}s ease`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default TransitionEffect;
