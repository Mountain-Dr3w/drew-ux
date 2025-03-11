
import React, { useEffect, useRef } from 'react';

interface TransitionEffectProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
}

const TransitionEffect: React.FC<TransitionEffectProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
  className = '',
  threshold = 0.1,
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

  let transformInitial = 'translateY(20px)';
  switch (direction) {
    case 'up':
      transformInitial = 'translateY(20px)';
      break;
    case 'down':
      transformInitial = 'translateY(-20px)';
      break;
    case 'left':
      transformInitial = 'translateX(20px)';
      break;
    case 'right':
      transformInitial = 'translateX(-20px)';
      break;
  }

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={{
        transform: transformInitial,
        transition: `opacity ${duration}s ease, transform ${duration}s ease`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default TransitionEffect;
